const inquirer = require("inquirer");
// 创建view文件还是component文件

module.exports = ()=>{
  const questions = [
    {
      name: "FILETYPE",
      type: "list",
      message: "你要创建什么文件？",
      choices: ["view", "component"],
    },
    {
      name: "FILENAME",
      type: "input",
      message: "取个名字吧"
    }
  ];
  return inquirer.prompt(questions);
}