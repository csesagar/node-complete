let fs = require('fs');
fs.writeFile('mycode.txt','this ismy data of node',(err)=>{
if(err) throw err;
console.log('task done ');
});     // for write 


fs.appendFile('mycode.txt','this is my data of express',(err)=>{   // to add text in that file 
if(err) throw err;
console.log('task done ');
}); 

fs.readFile('mycode.txt','utf-8',(err,data)=>{   // utf-8 , convert the buffer in read format 
if(err) throw err;
console.log('task done ');
})


// if multiple readFile were there it will mix with each other and if want code in sync that first task then next task 
 let data  = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'})
console.log(data)

let data1  = fs.readFileSync('myText.txt',{encoding:'utf-8',flag:'r'})
console.log(data1)


// deleting the file 
fs.unlink('mycode.txt',(err)=>{
    if(err) throw err;    // use of callback 
    console.log('file deleted')
})
// renaming the file 
fs.rename('myText.txt','myFile.xml',(err)=>{
    if(err) throw err;
    console.log('file renamed')
})