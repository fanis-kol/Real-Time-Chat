const express = require('express');

const app = express();
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

app.get('/',(req, res)=> {
    res.status(200).send("working");
})

server.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})