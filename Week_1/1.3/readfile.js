const fs = require('fs').promises
const fs1 = require('fs');

function callback(err,data){
    console.log(data);
}

function fileIsRead(content){
    console.log(content);
}

fs1.readFile("a.txt",'utf8',callback);
fs.readFile("a.txt", 'utf8').then(fileIsRead);