const express = require("express")

const app = express()

var username = "tom"
var password = 123

app.get("/login",function(req,res)
{
  if(req.query.username === username && req.query.password == password)
  {
    res.send("Login Successfull")
  }
  else{
    res.send("Login failed")
  }
})

app.listen(5000,function()
{
  console.log("Server Started..!!")
})