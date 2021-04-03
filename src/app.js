//Importando módulos
const express = require('express')
const bodyParser = require("body-parser")

//Atribuindo um módulo a uma constante app
const app = express()
 
//Config template e express
app.set("view engine", "ejs")
app.use('/public', express.static('public'));

//Config BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Iniciando banco de dados
require("../config/database")

//Importando rotas
const index = require('../routes/index')

//Usando rotas
app.use('/',index)

//Exportando constante app
module.exports = app