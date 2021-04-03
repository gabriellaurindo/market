//Importando Módulos
const bcrypt = require("bcrypt")
const usuario = require("../models/User")
const jwt = require('jsonwebtoken')
const EnvConfig = require ('../../config/vars/env')

//Função de login
function  login (req,res){
    const {email, senha} = req.body
    usuario.findOne({email}).then(user =>{
        if(user){
            bcrypt.compare(senha, user.senha, (err, success)=>{
                if(success){
                    user.senha = undefined
                    user.eAdmin= undefined
                    const token = jwt.sign({id : user.id}, EnvConfig.secret, {
                        expiresIn : 86400
                    })
                    res.statusCode = 200
                    res.send({Acesso:"Autorizado", user, token})
                }else{
                    res.statusCode = 401
                    res.send({Acesso:"Negado"})
                }
            })    
        }else{
            
        }
        
    }).catch(function(motivo){
        console.clear
        console.log(motivo)
     })
}

//Exportando Módulo
module.exports = login