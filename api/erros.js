const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/api/funcionarios", (requisicao, resposta) => {
    // const listaDeFuncionarios = ...
    resposta.send(JSON.stringify(listaDeFuncionarios));
});

app.post("/api/funcionarios", (requisicao, resposta) => {
    try {
        // const funcionario = ...
        resposta.send(JSON.stringify(funcionario));
    } catch (erro) {
        // resposta.send...
    }
});

app.get("/api/funcionarios/:id", (requisicao, resposta) => {
    try {
        // const funcionario = ...
        resposta.send(JSON.stringify(funcionario));
    } catch (erro) {
        // resposta.send...
    }
});

app.put("/api/funcionarios/:id", (requisicao, resposta) => {
    try {
        // const funcionario = ...
        resposta.send(JSON.stringify(funcionario));
    } catch (erro) {
        // resposta.send...
    }
});

app.delete("/api/funcionarios/:id", (requisicao, resposta) => {
    try {
        // const funcionario = ...
        resposta.send(JSON.stringify(funcionario));
    } catch (erro) {
        // resposta.send...
    }
});

app.listen(3000, () => console.log("API está funcionando"));
