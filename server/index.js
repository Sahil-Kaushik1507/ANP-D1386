// const http = require('http');
const path = require('path')

const express = require('express')

const app = express();


app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("home page")
})


app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
})

app.post('/contact',(req,res)=>{
    console.log(req.body)

    res.sendFile(path.join(__dirname,'public','home.html'));
})

app.use((req,res)=>{

    res.send("404 Page Not Found")
})



app.listen(5000, ()=>console.log("server started at 5000"))

// const server= http.createServer(app)




















function myhandler(req,res){


    if(req.url == '/'&& req.method=="GET"){
    
         res.end("Home Page");
    }else if(req.url=='/about' && req.method=="GET"){
        res.end("About Page")
    }
    else if(req.url=='/contact' && req.method=="GET"){
        res.end("Contact Page")    
    }
    else if(req.url=='/cart' && req.method=="GET"){
        res.end("Cart Page")
    }else {
        res.end("404 page not found")
    }


}


// server.listen(5000,()=>console.log("server started at 5000"))