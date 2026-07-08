import express from "express";
import { buscarUfs, buscarUfsPorNome, buscarUfPorId } from "./servicos/servico.js";

const app = express();

app.get("/ufs", (req, res) => {
    const nomeUf = req.query.busca;

    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ erro: "Nenhuma UF encontrada" });
    }
});

app.get("/ufs/:iduf", (req, res) => {
    const idUf = req.params.iduf;
    const uf = buscarUfPorId(idUf);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(idUf))) {
        res.status(404).send({ erro: "Requisição inválida" });
    } else {
        res.status(404).send({ erro: "UF não encontrada" });
    }
});

app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080/ufs");
});
