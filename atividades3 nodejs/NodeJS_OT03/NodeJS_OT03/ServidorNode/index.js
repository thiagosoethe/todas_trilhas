var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Primeiros passos com NodeJS");
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");
