var fs = require('fs');

if (!fs.existsSync('ArquivoNovoRenomeado.txt')) {
    fs.writeFileSync('ArquivoNovoRenomeado.txt', 'Ola Node.JS! UNISENAI 2023');
}

fs.unlink('ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo Deletado!');
});
