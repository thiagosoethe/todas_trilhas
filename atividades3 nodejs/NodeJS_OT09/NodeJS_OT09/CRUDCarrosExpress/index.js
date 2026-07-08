const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let carros = [
    { nome: "Onix", marca: "Chevrolet", preco: 75000 },
    { nome: "Gol", marca: "Volkswagen", preco: 55000 },
    { nome: "Argo", marca: "Fiat", preco: 70000 },
    { nome: "HB20", marca: "Hyundai", preco: 78000 },
    { nome: "Corolla", marca: "Toyota", preco: 150000 },
    { nome: "Civic", marca: "Honda", preco: 145000 }
];

app.get("/", (req, res) => {
    res.send("<h3>Rotas no Express</h3><p>CRUD de carros</p>");
});

app.get("/carros", (req, res) => {
    res.json(carros);
});

app.get("/carros/:id", (req, res) => {
    let id = req.params.id;

    return res.json(carros[id]);
});

app.post("/carros", (req, res) => {
    let nome = req.body.nome;
    let marca = req.body.marca;
    let preco = req.body.preco;

    let novoCarro = { nome, marca, preco };

    carros.push(novoCarro);

    return res.json(carros[carros.length - 1]);
});

app.put("/carros/update/:id", (req, res) => {
    let id = req.params.id;

    let nome = req.body.nome;
    let marca = req.body.marca;
    let preco = req.body.preco;

    carros[id] = { nome, marca, preco };

    return res.json(carros[id]);
});

app.delete("/carros/delete/:id", (req, res) => {
    let id = req.params.id;

    carros.splice(id, 1);

    return res.json({ message: "Carro deletado" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/carros");
});
