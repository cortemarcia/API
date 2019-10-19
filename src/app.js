const express =  require("express");
const app = express();

//rotas

const index = require("./routes/index");
const professoras = require("./routes/professorasRoute");

app.use(function (req,res, next){
    res.header("access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, x-Requestes-Width, Content-Type, Accept"// Notacoes pré prontas, documentacoes de seguranca de API (S-LINTE) 
    )

    next()
});

app.use("/", index)// Todavez que eu acessa a / quero que acesse a const index
app.use("/professoras", professoras)// mesma coisa

module.exports = app // Permitindo que app.js esteja disponivel pra ser utilizado(exportado)