//Importando módulos
const express = require('express')
const bodyParser = require("body-parser")

//Atribuindo um módulo a uma constante app
const app = express()
 
//Config template e express
app.set("view engine", "ejs")
app.use('/public', express.static('public'));

//Config BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Iniciando banco de dados
require("../config/database")

//Importando rotas
const index = require('../routes/index')
const panel = require('../routes/panel')
const panelCdMercado = require('../routes/panel-cdMercado')
const panelCdProduto = require('../routes/panel-cdProduto')
const panelMercado   = require('../routes/panel-mercado')

//Usando rotas
app.use('/',index)
app.use('/',panel)
app.use('/',panelCdMercado)
app.use('/',panelCdProduto)
app.use('/',panelMercado)

//Exportando constante app
module.exports = app