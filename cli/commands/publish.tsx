import React from "react";
import { render, Color, Box, Text } from "ink";
import TextInput from "ink-text-input";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { login, isLoggedIn, uploadPackage } from "../lib/api";
import ora from "ora";
import {
  buildPackage,
  buildTGZ,
  compressTar,
  saveTGZ
} from "../lib/publishPackage";
import { tgzFilePath, tgzFileName } from "../lib/packageUtils";
import fs from "fs";
import { requireLogin } from "./login";
import chalk from "chalk";
import emoji from "node-emoji";
import moment from "moment";

enum PublishStep {
  building_package = "building_package",
  uploading_source = "uploading_source",
  uploading_built = "uploading_built"
}

type Props = {
  packageName: string;
  packagePath: string;
  step: PublishStep;
};

type ContainerProps = {
  packageName: string;
  packagePath: string;
};

type State = { step: PublishStep };

class PublishComponentContainer extends React.Component<ContainerProps, Step> {
  render() {
    const { packageName, packagePath } = this.props;
    const { step } = this.state;

    return (
      <PublishComponent
        packageName={packageName}
        packagePath={packagePath}
        step={step}
      />
    );
  }
}

class PublishComponent extends React.Component<Props> {
  render() {
    const { packageName, packagePath, step } = this.props;
    return <Box />;
  }
}

const doPublishPackage = async (name: string, cwd: string) => {
  const startTime = new Date();
  const { files, metadata } = await buildPackage(name, cwd);
  const tgzFile = await buildTGZ(files);
  const tgzStream = await saveTGZ(tgzFile, name, cwd);
  const spinner = ora(`Uploading ${tgzFileName(name)} (public)`).start();
  try {
    const pkg = await uploadPackage({
      tgz: tgzStream,
      component: metadata,
      options: {}
    });

    const secondsElapsed = ((new Date() - startTime) / 1000).toFixed(2);

    spinner.stopAndPersist({
      symbol: chalk.green("√"),
      text: ` Published ${name} in ${secondsElapsed}s`
    });

    console.log(
      emoji.get("sparkles"),
      chalk.keyword("white")(`Now you can use ${name} in public pads`)
    );

    console.log(
      emoji.get("hammer"),
      chalk.keyword("gray")(`The source is on GitHub: ${pkg.github_url}`)
    );

    return pkg;
  } catch (exception) {
    spinner.stop();
    console.error(exception);
  }
};

export async function publishCommand(names: Array<string>, cwd: string) {
  await requireLogin();

  return Promise.all(
    names.map(name => {
      return doPublishPackage(name, cwd);
    })
  );
}
