import colecaoUf from "../dados/dados.js";

function buscarUfs() {
    return colecaoUf;
}

function buscarUfsPorNome(nomeUf) {
    return colecaoUf.filter((uf) => {
        return uf.nome.toLowerCase().includes(nomeUf.toLowerCase());
    });
}

function buscarUfPorId(idUf) {
    const id = parseInt(idUf);

    if (isNaN(id)) {
        return null;
    }

    return colecaoUf.find((uf) => uf.id === id);
}

export { buscarUfs, buscarUfsPorNome, buscarUfPorId };
