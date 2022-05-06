// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let openSource = vscode.commands.registerCommand(
    "ext.openSource",
    (uri: vscode.Uri) => {
      vscode.commands.executeCommand("revealFileInOS", uri);
    }
  );

  context.subscriptions.push(openSource);
}

// this method is called when your extension is deactivated
export function deactivate() {}
