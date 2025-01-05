/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
  res.send("Hello")
})

// First part || GET /files - Returns a list of files present in `./files/` directory
app.get("/file",(req,res)=>{
  let fileArray = [];
  fs.readdir(__dirname + "/files", (err,files)=>{
    if(err){
      res.send(err);
    }else{
      files.forEach(file=>{
        fileArray.push(file);
      })
    }
    res.status(200).json({
      msg:fileArray
    })
  })  
})


// Second part || GET /file/:filename - Returns content of given file by name
app.get("/file/:filename",(req,res)=>{
  const fileName = __dirname +"/files/"+ req.params.filename;
  fs.readFile(fileName, "utf-8", (err,data)=>{
    if(err){
      return res.status(404).send({
        error:"File not found"
      });
    }
    res.send(data);
  })
})


app.get("/*",(req,res)=>{
  let request = req.path;
  res.status(404).send({
    error:`${request } is Not a valid path`
  })
})
app.get("/file/*", (req,res)=>{
  let request = req.path;
  res.status(404).send({
    error:`${request } is Not a valid path`
  })
})

app.listen(port,()=>{
  console.log(`Listening to port ${port}`); 
})


module.exports = app;