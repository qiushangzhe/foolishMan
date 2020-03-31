const chalk = require("chalk");
const creater = require('./createrFactory/create'); // vue的相关创建
const creater_jq = require('./createrFactory/jqCreate'); // jq的相关创建
// 创建文件的代码
module.exports = (options)=>{
  const { FILETYPE, FILENAME , CREATETYPE, STYLETYPE, TEMPLATETYPE, JQACTIONTYPE, REPO} = options;
  if(CREATETYPE === 'vue项目') { 
    return creater(FILENAME, FILETYPE, STYLETYPE, TEMPLATETYPE);
  }
  if(CREATETYPE === 'jq单页面项目') {
    creater_jq(JQACTIONTYPE, REPO)
  }
}

