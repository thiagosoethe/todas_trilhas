var fs = require('fs');

fs.writeFileSync('novo.txt', 'Olá NodeJS! SENAI');
console.log('1 - Arquivo novo.txt criado com o texto inicial.');

fs.writeFileSync('novo.txt', 'Olá Node.JS! UNISENAI 2023');
console.log('2 - Arquivo novo.txt atualizado.');

fs.renameSync('novo.txt', 'ArquivoNovoRenomeado.txt');
console.log('3 - Arquivo renomeado para ArquivoNovoRenomeado.txt.');

fs.unlinkSync('ArquivoNovoRenomeado.txt');
console.log('4 - Arquivo deletado.');

fs.writeFileSync('ArquivoNovoRenomeado.txt', 'Olá Node.JS! UNISENAI 2023');
console.log('5 - Arquivo criado novamente para deixar na pasta.');
