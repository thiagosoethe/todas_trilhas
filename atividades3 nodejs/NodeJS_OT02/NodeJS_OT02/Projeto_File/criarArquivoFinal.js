var fs = require('fs');

fs.writeFile('ArquivoNovoRenomeado.txt', 'Olá Node.JS! UNISENAI 2023', function (err) {
    if (err) throw err;
    console.log('Arquivo final criado novamente!');
});
