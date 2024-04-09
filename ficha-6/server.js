const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000 

app.use(express.json());

function writeLog(req,res,next){
    var log = req.url + ", " + req.method + ", " + new Date().toString() + "\n"; 
    fs.appendFileSync("log.txt",log);
    next();
}

app.use(writeLog);

app.get('/' , (req,res)=>{
    const body = "hello word";
    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/plain'
    });
    res.end(body);
});

app.get('/log',(req,res)=>{
    var log = fs.readFileSync("log.txt", "utf-8");
    res.send(log);
});

app.get('/log.txt',(req,res)=>{
    res.download("log.txt",(err)=>{
        if (err) {
            res.status(404).send("file not found")
        }
    });
});

app.delete('/log/clear', (req,res)=>{
    fs.unlink('log.txt',(err)=>{
        if (err =! undefined) {
            res.status(404).end("uneable to delete file")
        }
        else{
            res.send("file deleted!")
        }
    });
});

app.get('/root' , (req,res)=>{
    const body = " <h1> Hello word !! </h1><p> asdfg </p>";
    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.get('/root/file' , (req,res)=>{
    const body = fs.readFileSync("index.html");
    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.get('/root/saudacao' , (req,res)=>{
    const body = "<h1>Bienvenido a mi aplicación de Express</h1>";
    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.get('/html/:name' , (req,res)=>{
    var date = new Date()
    var name = req.params.name;
    var body = fs.readFileSync("index.html","utf-8");
    body = body.replace("{name}",name);
    body = body.replace("{date}",date.toDateString());

    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.get('/user/:name' , (req,res)=>{     
    var name = req.params.name;
    var body = fs.readFileSync("index2.html","utf-8");
    body = body.replace("{name}",name);

    res.writeHead(200, {
        'content-Length':Buffer.byteLength(body),
        'content-Type':'text/html'
    });
    res.end(body);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
