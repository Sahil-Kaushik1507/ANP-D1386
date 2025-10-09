const http = require('http');
const fs = require('fs');
const path = require('path')


// import http from 'http';


const logFilePath = path.join(__dirname,"public","server.log")





const server = http.createServer((req,res)=>{

    console.log(req.rawHeaders)

    let date = new Date()
    let data = date +" " +req.url +" " + req.method + '\n'


fs.appendFile(logFilePath, data, (err)=>{
    if(err)console.log(err);
})

    res.end("Hello World")

})


server.listen(5000,()=>console.log("Server Stated at 5000 port"))