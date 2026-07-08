const divisao = function(a, b) {
    return a / b;
}

if (require.main === module) {
    console.log(`Resultado da divisao: ${divisao(10, 2)}`);
}

module.exports = divisao;
