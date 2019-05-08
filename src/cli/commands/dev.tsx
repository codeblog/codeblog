import { loadComponentDevServerForFolder, startServer } from "../lib/devServer";
import { requireLogin } from "./login";

export async function devCommand(cwd: string) {
  await requireLogin();

  await startServer();
  await loadComponentDevServerForFolder(cwd);
}
