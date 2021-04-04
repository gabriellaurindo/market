//Importando módulos
const express = require('express')
const prod = require('../api/models/Produto')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel
router.get('/panel-cdproduto', (req, res) =>{
    const {id} = req.body
    console.log(id)
    res.render("pages/dashboard-cdProduto")
  })  

router.post('/panel-cdproduto', (req,res) =>{
    const {nome, desc, valor, quantidade, link} = req.body
    prod.create({nome, desc, valor, quantidade, link})
                        .then(user =>{ 
                            res.redirect("/panel")
                        })
                        .catch(err =>{
                            res.redirect("/panel-cd")
                        })
})  

//Exportando rota  
module.exports = router
   