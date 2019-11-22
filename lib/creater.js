const chalk = require("chalk");
const viewCreate = require('./createrFactory/viewCreate');
const componentCreate = require('./createrFactory/componentCreate');
module.exports = (options)=>{
  const { FILETYPE, FILENAME } = options;
  if(FILENAME === '') { throw '文件必须有名字' }
  if(FILETYPE === 'view') { 
    return viewCreate(FILENAME);
  }
  if(FILETYPE === 'component') {
    return componentCreate(FILENAME);
  }
}

