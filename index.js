#!/usr/bin/env node
const package = require("./package.json");
const { program } = require("commander"); // 也可使用yargs
// const inquirer = require("inquirer");
// const download = require('download-git-repo'); // 下载github模板文件
// const handlebars = require('handlebars'); // 修改模板文件内容
const Main = require('./main');

program
  .name('tpl')
  .usage('<name> [options]')
  .version(package.version, "-v --version")
  .argument('<name>')
  .option('-t, --type <type name>', 'choies: [class, func, classTs, funcTs], default: funcTs')
  .option('-s, --source <source url>', 'in which path to build component，default is src/pages')
  .action((name, options) => {
    Main(name, options)
  });

program.parse(process.argv);


