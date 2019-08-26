const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

const port = 3003;

server.listen(port, function(){
    console.log(`O servidor esta rodando na porta ${port}.`);
});
