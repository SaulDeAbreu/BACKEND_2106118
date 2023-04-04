const { response } = require('express');
const express = require('express');
const app = express();

var server = app.listen(8081,function(){

    var host = server.address().address
    var port = server.address().port

    console.log("example app listening at http://%s:%s",host,port)
});
app.get("/teste",function(request, response){
    response.send("hello word");
});
app.get("/",function(request, response){
    response.send("hello word !!");
})