const chalk = require("chalk");
const figlet = require("figlet");

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
}