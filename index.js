var express = require("express");
var app = express();

app.get("/hi",(req,res)=>{
    res.send("Hi World");
});

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/",(req,res)=>{
    res.send("POST World");
});
app.listen(3000);