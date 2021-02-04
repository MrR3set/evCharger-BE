let express = require('express')

const server = express();

server.get("/", (req:any,res:any)=>{
    res.status(200).json("Api is up!");
})

export = server
