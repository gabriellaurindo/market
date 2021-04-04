//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e Configurando um Novo Schema
const mercSchema = new Schema({
    nome:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    }

})

//Definindo Modelo de Imagem Baseado no Schema
const merc = mongoose.model("merc", mercSchema)

//Exportando Módulo
module.exports = merc

