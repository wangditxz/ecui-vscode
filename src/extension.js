const jumpDefine = require("./jumpDefine");
const completion = require("./completion");
const docwebview = require("./docwebview");
const opendoc = require("./opendoc");

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {
    console.log("恭喜，您的扩展“vscode-plugin-demo”已被激活！");

    jumpDefine(context);
    completion(context);
    docwebview(context);
    opendoc(context);

};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
  console.log("您的扩展“vscode-plugin-demo”已被释放！");
};
