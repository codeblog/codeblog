import argv from "yargs";
import { newCommand } from "./commands/new";
import { devCommand } from "./commands/dev";
import { loginCommand } from "./commands/login";
import { publishCommand } from "./commands/publish";

const output = argv
  .scriptName("codeblog")
  .option("destination", {
    type: "string",
    default: process.cwd()
  })
  .option("open", {
    type: "boolean",
    description: "Auto-open the files in your text editor",
    default: true
  })
  .command(
    "new [name] [options]",
    "Create a new component for codeblog",
    // @ts-ignore
    yargs => {
      return yargs.option("name", {
        type: "string",
        describe: "Component name"
      });
    },
    ({
      name,
      destination,
      open
    }: {
      name: string;
      destination: any;
      open: boolean;
    }) => {
      return newCommand(name, destination, open);
    }
  )
  .command(
    "dev [options]",
    "Start a development server for components in the --destination folder",
    // @ts-ignore
    yargs => {
      return yargs;
    },
    ({ destination, open }: { destination: string; open: boolean }) => {
      return devCommand(destination);
    }
  )
  .command(
    "publish [names] [options]",
    "Start a development server for components in the --destination folder",
    // @ts-ignore
    yargs => {
      return yargs.option("names", {
        type: "string",
        array: true,
        describe: "Component name"
      });
    },
    ({ names, destination }: { destination: string; names: Array<string> }) => {
      return publishCommand(names, destination || process.cwd());
    }
  )
  .command(
    "login",
    "Login to codeblog.com",
    yargs => {
      return yargs;
    },
    () => loginCommand()
  )
  .demandCommand(1, "")
  .recommendCommands()
  .strict().argv;
