import React from "react";
import { render, Color, Box, Text } from "ink";
import TextInput from "ink-text-input";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import { login, isLoggedIn, uploadPackage } from "../lib/api";
import {
  buildPackage,
  buildTGZ,
  compressTar,
  saveTGZ
} from "../lib/publishPackage";
import { tgzFilePath } from "../lib/packageUtils";
import fs from "fs";
import { requireLogin } from "./login";

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
  console.log("Building....");
  const { files, metadata } = await buildPackage(name, cwd);
  const tgzFile = await buildTGZ(files);
  const tgzStream = await saveTGZ(tgzFile, name, cwd);
  console.log("Uploading....");
  try {
    const pkg = await uploadPackage({
      tgz: tgzStream,
      component: metadata,
      options: {}
    });

    console.log("Uploaded!");

    return pkg;
  } catch (exception) {
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
