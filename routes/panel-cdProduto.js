//Importando módulos
const express = require('express')
const prod = require('../api/models/Produto')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel
router.get('/panel-cdproduto', (req, res) =>{
    const {id} = req.query
    res.render("pages/dashboard-cdProduto", {id})
  })  

router.post('/panel-cdproduto', (req,res) =>{
    const {nome, desc, valor, quantidade, link, id} = req.body
    prod.create({nome, desc, valor, quantidade, link, id_mercado:id})
                        .then(user =>{ 
                            res.redirect("/panel")
                        })
                        .catch(err =>{
                            console.log('Deu ruim')
                        })
})  

//Exportando rota  
module.exports = router
   