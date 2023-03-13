const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients", (req, res) => {
    res.status(200).json(data);
});

app.get("/clients/:id", (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json({message: "Cliente não encontrado!"});

    res.status(200).json(client);
});

app.post("/clients", (req, res) => {
    const {name, email} = req.body

    // validations
    if (!name) return res.status(422).json({message: "Nome é obrigatório!"})

    if (!email) return res.status(422).json({message: "E-mail é obrigatório!"})

    // create object and save

    res.status(200).json({name, email})
});

app.put("/clients/:id", (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json({message: "Cliente não encontrado!"});

    const { name, email } = req.body

    client.name = !name ? client.name : name
    client.email = !email ? client.email : email

    res.status(200).json(client)
});

app.delete("/clients/:id", (req, res) => {
    const { id } = req.params;

    //delete fake
    const clientsFiltered = data.filter(cli => cli.id != id);

    res.status(200).json(clientsFiltered)
});

app.listen(3000,() => {
    console.log('App rodando na porta 3000')
})