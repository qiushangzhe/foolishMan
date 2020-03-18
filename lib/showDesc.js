const chalk = require("chalk");
const figlet = require("figlet");
const { version } = require('../package');
function createBanner () {
  
  return chalk.cyan(
    figlet.textSync("Foolish Man !", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  )
}


module.exports = ()=>{
  console.log(createBanner());
  console.log(chalk.red('=>当前工具版本：', version, '😀'))
  console.log(chalk.red('=>欢迎使用'))
}