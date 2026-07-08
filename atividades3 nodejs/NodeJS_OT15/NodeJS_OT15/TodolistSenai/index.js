const express = require("express");
const path = require("path");

const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tasks = ["Passear com o dog", "Ir ao mercado", "Comprar pão"];

app.get("/", (req, res) => {
    res.render("index", { tasksList: tasks });
});

app.post("/", (req, res) => {
    let task = req.body.task;

    if (task && task.trim() !== "") {
        tasks.push(task);
    }

    res.render("index", { tasksList: tasks });
});

app.get("/deletar/:id", (req, res) => {
    let id = req.params.id;

    tasks = tasks.filter((task, index) => {
        if (index != id) {
            return task;
        }
    });

    res.render("index", { tasksList: tasks });
});

const portaInicial = Number(process.env.PORT) || 5000;
const portas = [portaInicial, 5050, 5051, 5052];

function iniciarServidor(posicao) {
    const porta = portas[posicao];

    const servidor = app.listen(porta, () => {
        console.log("Servidor rodando em http://localhost:" + porta);
    });

    servidor.on("error", (erro) => {
        if (posicao < portas.length - 1) {
            const proximaPorta = portas[posicao + 1];
            console.log("Porta " + porta + " indisponivel. Tentando http://localhost:" + proximaPorta);
            iniciarServidor(posicao + 1);
        } else {
            console.log("Nao foi possivel iniciar o servidor.");
        }
    });
}

iniciarServidor(0);
