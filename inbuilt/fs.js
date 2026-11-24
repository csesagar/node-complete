let fs = require('fs');
fs.writeFile('mycode.txt','this ismy data of node',(err)=>{
if(err) throw err;
console.log('task done ');
});
 