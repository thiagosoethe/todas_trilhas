const express = require("express");

const app = express();

app.use(express.json());

let games = [
    { title: "Sea of Thieves", studio: "Rare", price: 30 },
    { title: "World of Warcraft", studio: "Blizzard", price: 120 },
    { title: "Valorant", studio: "Riot Games", price: 0 },
    { title: "Call of Duty", studio: "Activision", price: 200 },
    { title: "Minecraft", studio: "Mojang", price: 80 },
    { title: "Halo", studio: "Microsoft", price: 90 },
    { title: "Fortnite", studio: "Epic Games", price: 0 },
    { title: "The Witcher 3", studio: "CD Projekt Red", price: 100 },
    { title: "God of War", studio: "Santa Monica Studio", price: 250 },
    { title: "GTA V", studio: "Rockstar Games", price: 120 }
];

app.get("/", (req, res) => {
    res.json(games);
});

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price };

    games.push(newGame);

    res.send("OK");
});

app.listen(3080, () => {
    console.log("Servidor rodando!");
});
