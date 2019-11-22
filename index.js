#!/usr/bin/env node
const chalk = require("chalk");

const showDesc = require('./lib/showDesc');
const askQuestion = require('./lib/askQuestion');
const creater = require('./lib/creater');
const errorHander = require('./lib/error');

const run = async () => {
  // 显示脚本介绍
  showDesc();
  // 询问问题
  const creatOption = await askQuestion();
  // 创建文件
  const result = creater(creatOption);
  // 显示成功消息提示
  console.log(chalk.white.bgGreen.bold(`Done! 文件创建完毕：${result}`));
};
(async ()=>{ try { await run(); } catch (error) { errorHander(error) } })()

