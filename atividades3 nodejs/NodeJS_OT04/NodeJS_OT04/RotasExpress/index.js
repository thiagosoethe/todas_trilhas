const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('<h1>Pagina inicial</h1>');
});

app.get('/sobre', function (req, res) {
    res.send('<h1>Pagina sobre</h1>');
});

app.get('/contato', function (req, res) {
    res.send('<h1>Pagina contato</h1>');
});

app.get('/empresa', function (req, res) {
    res.send('<h1>Pagina empresa</h1>');
});

app.listen(port, function () {
    console.log('Servidor iniciado na porta ' + port);
});
