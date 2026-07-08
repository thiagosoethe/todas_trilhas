const multiplicacao = function(a, b) {
    return a * b;
}

if (require.main === module) {
    console.log(`Resultado da multiplicacao: ${multiplicacao(4, 5)}`);
}

module.exports = multiplicacao;
