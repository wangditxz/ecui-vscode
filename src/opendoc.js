const util = require("./util");
const vscode = require("vscode");

module.exports = function(context) {
    context.subscriptions.push(
      vscode.commands.registerCommand("extension.openDoc", () => {
        util.openDefault();
      })
    );
};