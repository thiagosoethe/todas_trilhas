const soma = function(a, b) {
    return a + b;
}

if (require.main === module) {
    console.log(`Resultado da soma: ${soma(1, 2)}`);
}

module.exports = soma;
