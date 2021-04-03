//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e Configurando um Novo Schema
const imgSchema = new Schema({
    link:{
        type:String,
        require:true
    }
})

//Definindo Modelo de Imagem Baseado no Schema
const img = mongoose.model("img", imgSchema)

//Exportando Módulo
module.exports = img

