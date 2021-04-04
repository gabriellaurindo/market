//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e Configurando um Novo Schema
const prodSchema = new Schema({
    nome:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    valor:{
        type:Number,
        require:true
    },
    quantidade:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
    id_mercado:{
        type:String,
        require:true
    }
})

//Definindo Modelo de Imagem Baseado no Schema
const prod = mongoose.model("prod", prodSchema)

//Exportando Módulo
module.exports = prod

