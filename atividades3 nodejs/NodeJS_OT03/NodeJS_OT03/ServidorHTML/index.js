var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
    fs.readFile("index.html", function(erro, pagina) {
        if (erro) {
            console.log(erro);
            response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Erro ao abrir o arquivo HTML");
            return;
        }

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(pagina);
    });
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");
