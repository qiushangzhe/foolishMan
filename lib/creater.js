const chalk = require("chalk");
const viewCreate = require('./createrFactory/viewCreate');
const creater = require('./createrFactory/create'); // vue的相关创建
const componentCreate = require('./createrFactory/componentCreate');
// 创建文件的代码
module.exports = (options)=>{
  const { FILETYPE, FILENAME , CREATETYPE, STYLETYPE, TEMPLATETYPE} = options;
  if(CREATETYPE === 'vue项目') { 
    console.log(options)
    return creater(FILENAME, FILETYPE, STYLETYPE, TEMPLATETYPE);
  }
}

