const chalk = require("chalk");
module.exports = (error)=>{
  console.log(chalk.red(`******************ops出错了！！！******************`))
  console.log(chalk.red(`问题提示： ${error}`))
  console.log(chalk.red(`****************************************************`))
}