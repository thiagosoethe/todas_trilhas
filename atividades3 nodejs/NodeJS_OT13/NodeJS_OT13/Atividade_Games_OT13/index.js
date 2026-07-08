const express = require("express");

const app = express();

app.use(express.json());

let games = [
    { id: 1, title: "Sea of Thieves", studio: "Rare", price: 30 },
    { id: 2, title: "World of Warcraft", studio: "Blizzard", price: 120 },
    { id: 3, title: "Valorant", studio: "Riot Games", price: 0 },
    { id: 4, title: "Call of Duty", studio: "Activision", price: 200 },
    { id: 5, title: "Minecraft", studio: "Mojang", price: 80 },
    { id: 6, title: "Halo", studio: "Microsoft", price: 90 },
    { id: 7, title: "Fortnite", studio: "Epic Games", price: 0 },
    { id: 8, title: "The Witcher 3", studio: "CD Projekt Red", price: 100 },
    { id: 9, title: "God of War", studio: "Santa Monica Studio", price: 250 },
    { id: 10, title: "GTA V", studio: "Rockstar Games", price: 120 }
];

const buscarGamesPorNome = (nomeGame) => {
    return games.filter((game) => {
        return game.title.toLowerCase().includes(nomeGame.toLowerCase());
    });
};

app.get("/", (req, res) => {
    res.json(games);
});

app.get("/games", (req, res) => {
    const nomeGame = req.query.busca;

    const resultado = nomeGame ? buscarGamesPorNome(nomeGame) : games;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ erro: "Nenhum game encontrado" });
    }
});

app.get("/games/:id", (req, res) => {
    const idGame = parseInt(req.params.id);
    let mensagemErro = "";
    let game;

    if (!(isNaN(idGame))) {
        game = games.find((g) => g.id === idGame);

        if (!game) {
            mensagemErro = "Game não encontrado";
        }
    } else {
        mensagemErro = "Requisição inválida";
    }

    if (game) {
        res.json(game);
    } else {
        res.status(404).send({ erro: mensagemErro });
    }
});

app.listen(3080, () => {
    console.log("Servidor rodando em http://localhost:3080/games");
});
