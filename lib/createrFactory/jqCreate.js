const down = require('download-git-repo');
module.exports = (action, repo)=>{
  if(action === '初始化项目') {
    initProject(repo)
  }
} 

function initProject(repo) {
  console.log(repo)
  down(repo,'template',{},(err)=>{
    console.log(err)
  })
}