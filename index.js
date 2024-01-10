var express = require('express');
var app = express();
var db = require("./database/db.json");
var bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());
const PORT = 3000;

const generateID = () => {
    return (new Date()).getTime();
}

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}.`)
});

app.get("/pessoas", async (req, res) => {
    res.json(db.pessoas);
})

app.get("/pessoas/:id", async (req, res) => {
    const pessoa = db.pessoas.filter(x => x.id == req.params.id)[0];
    res.json(pessoa);
})

app.post("/pessoas", async (req, res) => {
    const novaPessoa = req.body;
    novaPessoa.id = generateID();
    db.pessoas.push(novaPessoa);
    fs.writeFileSync("./database/db.json", JSON.stringify(db));
    res.json(novaPessoa);
})

app.delete("/pessoas/:id", async (req, res) => {
    let index = db.pessoas.findIndex(x => x.id == req.params.id);
    db.pessoas.splice(index, 1);
    fs.writeFileSync("./database/db.json", JSON.stringify(db));
    res.send("Pessoa deletada com sucesso"); 
})

app.get("/projetos", async (req, res) => {
    res.json(db.projetos)
})

app.get("/projetos/:id", async (req, res) => {
    const projeto = db.projetos.filter(x => x.id == req.params.id)[0];

    if(!projeto) return res.status(400);
    //lista para armazenar a união das informações de membros e pessoas
    list = []
    projeto.membros.forEach(membro => {
        pessoa = db.pessoas.filter(pessoa => pessoa.id == membro.idPessoa)[0];
        // copia os campos de pessoa para membro do projeto
        membro = Object.assign(membro, pessoa)
        list.push(membro);
    });
    
    projeto.membros = list;
    res.json(projeto);
})

app.post("/projetos", async (req, res) => {
    const novoProjeto = await req.body;
    novoProjeto.id = generateID();
    db.projetos.push(novoProjeto);
    fs.writeFileSync("./database/db.json", JSON.stringify(db));
    res.json(novoProjeto);
})

app.delete("/projetos/:id", async (req, res) => {
    const index = db.projetos.findIndex(x => x.id == req.params.id);
    db.projetos.splice(index, 1);
    fs.writeFileSync("./database/db.json", JSON.stringify(db));
    res.send("Projeto deletado com sucesso");
})
