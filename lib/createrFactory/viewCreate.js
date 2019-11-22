const fs = require('fs');
const path = require('path');
function changeName (data) {
  let buffer = data
  buffer = buffer.replace(/([A-Z])/g, '-$1')
  buffer = buffer.toLowerCase()
  if(buffer[0] === '-') { buffer = buffer.substr(1); }
  return buffer
}
function save(input,output,fileName,componentDirPath,isChange = false) {
  const template = path.join(__dirname, '../../template')
  let buffer = String(fs.readFileSync(template + input))
  buffer = isChange ? buffer.replace(/{{name}}/g, changeName(fileName)) : buffer.replace(/{{name}}/g, fileName);
  fs.writeFileSync(path.join(componentDirPath, output), buffer)
}

module.exports = (fileName)=>{
  const rootPath = process.cwd(); 
  const srcPath = path.join(rootPath, '/src');
  const viewsPath = path.join(srcPath, '/views');

  fs.mkdirSync(viewsPath + '/' + fileName)
  const viewDirPath = path.join(viewsPath, '/', fileName);
  const componentDirPath = path.join(viewsPath, '/', fileName);

  save('/template.vue', 'index.vue', fileName, componentDirPath);
  save('/template.html', `${fileName}.html`, fileName, componentDirPath, true);
  save('/template.less', `${fileName}.less`, fileName, componentDirPath, true);
  save('/viewTemplate.js', `${fileName}.js`, fileName, componentDirPath, true);

  return `${viewDirPath}`
}