var fs = require('fs');

if (!fs.existsSync('novo.txt')) {
    fs.writeFileSync('novo.txt', 'Ola Node.JS! UNISENAI 2023');
}

if (fs.existsSync('ArquivoNovoRenomeado.txt')) {
    fs.unlinkSync('ArquivoNovoRenomeado.txt');
}

fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo Renomeado!');
});
