## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```



//code 

create a a.txt file and write somedata in it which need to be cleaned.

const fs = require('fs');

function clean(data){
  let arr = data.split(" ");
  const answerArray = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i].length > 0){
      answerArray.push(arr[i]);
    }
  }
  const answerStirng = answerArray.join(" ");
  return answerStirng;
}

function fileRead(err,data){
  if(err){
    console.log(err);
    return;
  }
  let cleanedData = clean(data);
  fs.writeFile("a.txt",cleanedData, "utf-8", (err)=>{
    if(err){
      console.error(err);
      return;
    }
    console.log('File has been written');
  })
}
fs.readFile("a.txt", "utf-8",fileRead);