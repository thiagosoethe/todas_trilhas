const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('<h1>Criando um servidor com Express.js</h1>');
});

app.listen(port, function () {
    console.log('Servidor iniciado na porta ' + port);
});
