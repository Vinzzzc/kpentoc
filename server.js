const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("AUSTIN FENNIX ACTIVE")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("AUSTIN FENNIX ACTIVE")});
}
module.exports = keepAlive