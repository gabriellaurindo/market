//Importando módulos
const express = require('express')
const prod = require('../api/models/Produto')
const merc = require('../api/models/Mercado')


//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel

router.post('/panel-produto', (req,res) =>{
    const {id} = req.body
    prod.findById(id).then(produto=>{
        merc.findOne({_id:produto.id_mercado}).then(mercado=>{
            res.render('pages/dashboard-produto', {produto, mercado})
        })        
    })
})

router.post('/panel-produtomod', (req,res)=>{
    const {nome, desc, valor, quantidade, link, id} = req.body
    prod.updateOne({ _id:id}, { $set: {nome,desc,valor,quantidade,link}})
})

//Exportando rota  
module.exports = router  
   