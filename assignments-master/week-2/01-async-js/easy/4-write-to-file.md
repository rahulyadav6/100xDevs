## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

//code 

const fs = require('fs');

let data = "Hello guys welcome back to my youtube channel.";
function afterContentUpdated(err){
    if(err){
      console.error(err);
      return;
    }
    console.log('File has been writeen')
  }
fs.writeFile("a.txt",data, "utf-8", afterContentUpdated);