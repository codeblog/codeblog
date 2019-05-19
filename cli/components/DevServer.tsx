import * as React from "react";
import { render, Color, Box, Text } from "ink";
import Spinner from "ink-spinner";
import Gradient from "ink-gradient";

enum DevServerStep {
  authenticating,
  loading_components,
  ready
}

type BuildStatus = "building" | "success" | "error";

type DevComponent = {
  packageName: string;
  id: string;
  packagePath: string;
  buildStatus: BuildStatus;
};

type State = {
  components: Array<DevComponent>;
  step: DevServerStep;
  isEditorConnected: boolean;
};

export class DevServerComponent extends React.Component<{}, State> {
  state = {
    components: [],
    step: DevServerStep.authenticating,
    isEditorConnected: false
  };

  render() {
    return (
      <Box>
        <Gradient name="passion">
          <Text />
        </Gradient>
      </Box>
    );
  }
}

export class Loading extends React.Component {}
