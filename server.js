//"npm init -y" apra inciar nps
//"instal ejs" instlando ejs
//"isntall express" instalando express
//requisitando modulo express
const express = require('express')
//isntanciando express
const app = express()

//setando ejs como tipo de arquivo
app.set("view engine", "ejs")

//colocando index como resposta
app.get("/", function(req,res){
    //criando array de abjetos pra passar junto com o EJS
    const items = [
        {
            title:"D",
            message: "esenvolver aplicações/serviços de forma facil."
        },
        {
            title:"E",
            message: "JS usa JavaScript para renderizar HTML pelo NodeJS."
        },
        {
            title:"M",
            message: "uito facil de usar."
        },
        {
            title:"A",
            message: "prender é muito bom."
        },
        {
            title:"I",
            message: "nstall EJS."
        },
        {
            title:"S",
            message: "intaxe simples."
        }
    ]
    //Passando objeto com array de objetos
    res.render("pages/index",{qualitys:items,})
})

app.get("/sobre", function(req,res){
    res.render("pages/about")
})

//porta 8080
app.listen(8080)
console.log('Rodando...')