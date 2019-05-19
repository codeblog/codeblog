// import { loadComponentDevServerForFolder, startServer } from "../lib/devServer";
import { requireLogin } from "./login";
import { render } from "ink";
import { DevServerComponent } from "../components/DevServer";
import * as React from "react";

export async function devCommand(cwd: string) {
  await requireLogin();

  render(<DevServerComponent />);

  // await startServer();
  // await loadComponentDevServerForFolder(cwd);
}
