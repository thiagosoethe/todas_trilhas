var fs = require('fs');

fs.writeFileSync('novo.txt', 'Ola NodeJS! SENAI');
console.log('Arquivo novo.txt criado.');

fs.writeFileSync('novo.txt', 'Ola Node.JS! UNISENAI 2023');
console.log('Arquivo novo.txt atualizado.');

fs.renameSync('novo.txt', 'ArquivoNovoRenomeado.txt');
console.log('Arquivo renomeado.');

fs.unlinkSync('ArquivoNovoRenomeado.txt');
console.log('Arquivo deletado.');

fs.writeFileSync('ArquivoNovoRenomeado.txt', 'Ola Node.JS! UNISENAI 2023');
console.log('Arquivo criado novamente para entregar.');
