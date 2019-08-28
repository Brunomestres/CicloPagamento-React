const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('../config/Cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

const port = 3003;

server.listen(port, function(){
    console.log(`O servidor esta rodando na porta ${port}.`);
});

module.exports = server;