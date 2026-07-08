const subtracao = function(a, b) {
    return a - b;
}

if (require.main === module) {
    console.log(`Resultado da subtracao: ${subtracao(10, 2)}`);
}

module.exports = subtracao;
