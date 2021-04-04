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
    const {nome, desc, quantidade, link, id, valor} = req.body
    console.log(nome, desc, quantidade, link, id, valor)
    prod.findByIdAndUpdate(id, {nome, desc, valor, quantidade, link}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User : ",docs);
        }
    })
})

//Exportando rota  
module.exports = router  
   