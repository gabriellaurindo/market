//Importando módulos
const express = require('express')
const merc = require('../api/models/Mercado')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel
router.get('/panel-cdmercado', (req, res) =>{
    res.render("pages/dashboard-cdMercado")
  })

router.post('/panel-cdmercado', (req,res) =>{
    const {nome, desc} = req.body
    merc.create({nome, desc})
                        .then(user =>{ 
                            res.redirect("/panel")
                        })
                        .catch(err =>{
                            res.redirect("/panel-cdmercado")
                        })
})  

//Exportando rota  
module.exports = router  
   