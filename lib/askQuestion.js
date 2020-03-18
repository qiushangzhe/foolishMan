const inquirer = require("inquirer");
// 创建view文件还是component文件

module.exports = ()=>{
  const questions = [
    {
      name: "CREATETYPE", // 创建模式
      type: "list",
      message: "你要做什么类型的创建操作？",
      choices: [ "vue项目" , "jq单页面项目" ],
    },
    {
      name: "FILETYPE",
      type: "list",
      message: "你要创建什么文件？",
      choices: ["view", "component"],
      when: (answer) => {
        return answer.CREATETYPE === 'vue项目'
      }
    },
    {
      name: "STYLETYPE",
      type: "list",
      message: "样式文件你使用的是？",
      choices: [ "css", "scss", "less", "stylus" ],
      when: (answer) => {
        return answer.CREATETYPE === 'vue项目'
      }
    },
    {
      name: "TEMPLATETYPE",
      type: "list",
      message: "模版文件你用？",
      choices: [ "html", "pug" ],
      when: (answer) => {
        return answer.CREATETYPE === 'vue项目'
      }
    },
    {
      name: "FILENAME",
      type: "input",
      message: "取个名字吧"
    }
  ];
  return inquirer.prompt(questions);
}