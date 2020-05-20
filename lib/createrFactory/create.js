const fs = require('fs');
const path = require('path');
function changeName (data) {
  let buffer = data
  buffer = buffer.replace(/([A-Z])/g, '-$1')
  buffer = buffer.toLowerCase()
  if(buffer[0] === '-') { buffer = buffer.substr(1); }
  return buffer
}

function save(input,output,fileName,componentDirPath,styleType, templateType, type, isChange = false) {
  const template = path.join(__dirname, '../../template')
  let buffer = String(fs.readFileSync(template + input))
  buffer = isChange ? buffer.replace(/{{name}}/g, changeName(fileName)) : buffer.replace(/{{name}}/g, fileName);
  if(type === 'vue') {
    buffer = buffer.replace(/{{templateType}}/g, templateType)
    buffer = buffer.replace(/{{styleType}}/g, styleType)
  }
  if(type === 'template') {
    if(templateType === 'pug') { buffer = `.${changeName(fileName)}-content` }
  }
  if(type === 'style') {
    if(styleType === 'css' || styleType === 'scss' || styleType === 'less') {
      buffer += ' {}'
    } else if (styleType === 'styl') {
      buffer += `
  box-sizing: border-box`
    }
  }
  fs.writeFileSync(path.join(componentDirPath, output), buffer)
}

module.exports = (fileName, type,  styleType, templateType, scriptType)=>{
  const rootPath = process.cwd();
  const srcPath = path.join(rootPath, '/src');
  let buffer = ''; // 存放创建文件的为止
  if(styleType === 'stylus') { styleType = 'styl' }
  type === 'component' ? buffer = '/components' : type === 'view' ? buffer = '/views' : ()=>{}
  const dir = path.join(srcPath, buffer);
  fs.mkdirSync(dir + '/' + fileName)
  const dirPath = path.join(dir, '/', fileName);

  save('/template.vue', 'index.vue', fileName, dirPath, styleType, templateType, 'vue');
  save('/template.html', `${fileName}.${templateType}`, fileName,dirPath, styleType, templateType, 'template', true);
  save('/template.less', `${fileName}.${styleType}`, fileName,dirPath, styleType, templateType, 'style', true);
  if(scriptType === 'js') {
    save('/componentTemplate.js', `${fileName}.js`, fileName,dirPath, styleType, templateType, 'js', true);
  } else if (scriptType === 'ts') {
    save('/template.ts', `${fileName}.ts`, fileName,dirPath, styleType, templateType, 'js', false);
  }
  
  return `${dirPath}`
}

 