import chalk from "chalk";
import fs from "fs";
import { Box, Color, render, Text } from "ink";
import SelectInput from "ink-select-input";
import TextInput from "ink-text-input";
import { camelCase, kebabCase, startCase, trim, upperFirst } from "lodash";
import path from "path";
import React from "react";
import { resolveGlobal } from "../lib/createPackageJSON";
import { openInEditor } from "../lib/openInEditor";
import { jsFileName, packageJSFilename } from "../lib/packageUtils";
import { devCommand } from "./dev";
import { requireLogin } from "./login";

type Choice = "block" | "inline";

const BOILERPLATE_PATH =
  process.env.NODE_ENV === "production"
    ? path.join(resolveGlobal("codeblog"), "../../boilerplate")
    : path.resolve(__dirname, "../boilerplate");

const BLOCK_COMPONENT_BOILERPLATE_PATH = path.join(
  BOILERPLATE_PATH,
  "block-component"
);

const INLINE_COMPONENT_BOILERPLATE_PATH = path.join(
  BOILERPLATE_PATH,
  "inline-component"
);

const BOILERPLATE_BY_CHOICE = {
  inline: INLINE_COMPONENT_BOILERPLATE_PATH,
  block: BLOCK_COMPONENT_BOILERPLATE_PATH
};

type Replacements = { [key: string]: string };
const stringWithReplacements = (
  content: string,
  replacements: Replacements
) => {
  let _content = content;
  Object.keys(replacements).forEach((key: string) => {
    _content = _content.split(key).join(replacements[key]);
  });
  return _content;
};

function generateBoilerplate(
  _name: string,
  folder: string,
  username: string,
  destination: string
) {
  const name = upperFirst(camelCase(_name));
  const title = startCase(_name);

  const jsFileBoilerplate = fs.readFileSync(
    path.join(folder, "component.js"),
    "utf8"
  );

  const packageFileBoilerplate = fs.readFileSync(
    path.join(folder, "component.package.js"),
    "utf8"
  );

  const replacements = {
    "{{name}}": kebabCase(name),
    "{{title}}": title,
    "{{titleCase}}": name,
    "{{username}}": username,
    "{{packageJSPath}}": path.join(destination, packageJSFilename(_name))
  };

  const jsFileText = stringWithReplacements(jsFileBoilerplate, replacements);
  const packageFileText = stringWithReplacements(
    packageFileBoilerplate,
    replacements
  );

  return {
    [jsFileName(name)]: jsFileText,
    [packageJSFilename(name)]: packageFileText
  };
}

export function saveBlockComponentBoilerplate(
  _name: string,
  destination: string,
  username: string
) {
  const files = generateBoilerplate(
    _name,
    BLOCK_COMPONENT_BOILERPLATE_PATH,
    username,
    destination
  );

  return Object.keys(files).map(fileName => {
    const abs = path.join(destination, fileName);
    fs.writeFileSync(abs, files[fileName], {
      encoding: "utf8",
      flag: "w"
    });

    console.log(chalk.keyword("green")("Wrote"), abs);

    return abs;
  });
}

export function saveInlineComponentBoilerplate(
  _name: string,
  destination: string,
  username: string
) {
  const files = generateBoilerplate(
    _name,
    INLINE_COMPONENT_BOILERPLATE_PATH,
    username
  );

  return Object.keys(files).map(fileName => {
    const abs = path.join(destination, fileName);
    fs.writeFileSync(abs, files[fileName], {
      encoding: "utf8",
      flag: "w"
    });

    console.log(chalk.keyword("green")("Wrote"), abs);

    return abs;
  });
}

type Props = {
  defaultName: string | null;
  onSelect: (choice: Choice, name: string) => void;
};

type State = {
  choice: Choice;
  step: "name" | "choice";
  name: string;
};

class BoilerplatePicker extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: props.defaultName || "",
      step: "name",
      choice: "block"
    };
  }

  handleChangeName = (name: string) => this.setState({ name });
  handleSetStepToChoice = () => {
    const { name } = this.state;
    if (trim(name).length > 0) {
      this.setState({ step: "choice" });
    }
  };

  handleSubmitChoice = ({ value }: { value: Choice }) => {
    this.props.onSelect(value, this.state.name);
  };

  render() {
    const { step, choice, name } = this.state;

    if (step === "name") {
      return (
        <Box>
          <Text>
            <Color white>&gt; Enter component name:</Color>{" "}
          </Text>
          <TextInput
            value={name}
            placeholder="My cool component"
            showCursor
            onSubmit={this.handleSetStepToChoice}
            onChange={this.handleChangeName}
          />
        </Box>
      );
    } else if (step === "choice") {
      return (
        <Box flexDirection="column">
          <Color white>&gt; What kind of component?</Color>{" "}
          <SelectInput
            items={[
              {
                label:
                  "Block – wraps an entire line. Good for things like headers, textures and embeds",
                value: "block"
              },
              {
                label:
                  "Inline – applies to text inside a block. Good for text effects",
                value: "inline"
              }
            ]}
            onSelect={this.handleSubmitChoice}
            initialIndex={0}
          />
        </Box>
      );
    }
  }
}

const getNameAndChoice = (defaultName: string | null): Promise<any> => {
  return new Promise(resolve => {
    const { unmount } = render(
      <BoilerplatePicker
        defaultName={defaultName || null}
        onSelect={(choice, name) => {
          resolve([choice, name]);
          unmount();
        }}
      />
    );
  });
};

export async function newCommand(
  defaultName: string | null,
  destination: string | null,
  autoOpen: boolean
) {
  const user = await requireLogin();

  const _destination = destination || __dirname;

  const [choice, name] = await getNameAndChoice(defaultName);

  let files;

  if (choice === "block") {
    files = saveBlockComponentBoilerplate(
      name,
      _destination,
      user.blog.subdomain
    );
  } else if (choice === "inline") {
    files = saveInlineComponentBoilerplate(
      name,
      _destination,
      user.blog.subdomain
    );
  }

  if (autoOpen) {
    await openInEditor(files[1]);
    await openInEditor(files[0]);
  }
}
