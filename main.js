const path = require('path');
const fs = require('fs');
const symbols = require("log-symbols"); // 终端美化
const chalk = require("chalk"); // 修改终端输出字体颜色

const types = ['class', 'func', 'classTs', 'funcTs'];
const dirs = ['components', 'services', 'models'];

const Main = (name, options) => {
    const source = options.source || 'src/pages';
    const type = options.type || 'funcTs';
    const filePath = path.resolve(process.cwd(), source, name);
    const suffix = type?.toLowerCase().indexOf('ts') > -1 ? 'ts' : 'js';

    if (fs.existsSync(filePath)) {
        console.log(symbols.error, chalk.red(`${source}路径下，该组件已存在！`))
        return;
    } else if (!types.includes(type)) {
        console.log(symbols.error, chalk.red(`请输入正确的type，choies: ['class', 'func', 'classTs', 'funcTs']`))
        return;
    }

    // 创建目录
    fs.mkdir(filePath, { recursive: true }, () => {
        // 判断type，输出对应模板
        const { indexFile, CompFile, CompLessFile } = require(`./templates/${type}Comp`);
        fs.writeFileSync(`${filePath}/index.${suffix}`, indexFile(name))
        fs.writeFileSync(`${filePath}/${name}.${suffix === 'ts' ? 'tsx' : suffix}`, CompFile(name))
        fs.writeFileSync(`${filePath}/${name}.less`, CompLessFile(name))
        dirs.forEach(dir => {
            fs.mkdirSync(`${filePath}/${dir}`);
        })
        console.log(symbols.success, chalk.green('创建成功！'))
    });
}

module.exports = Main;