//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const userSchema = new Schema({
    nome:{
       type: String,
       require:true
    },
    email:{
        type: String,
        require:true
    },
    eAdmin:{
        type:Number,
        default:0
    },
    senha:{
        type:String,
        require:true,
        
    }
})

//Definindo modelo de usuário baseado no Schema
const user = mongoose.model("usuario", userSchema)

//Exportando Módulo
module.exports = user


