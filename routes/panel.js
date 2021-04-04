//Importando módulos
const express = require('express')
const merc = require('../api/models/Mercado')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel
router.get('/panel', (req, res) =>{
    merc.find({}).then(mercados =>{
        res.render("pages/dashboard", {mercados})
    })
    
  })

//Exportando rota  
module.exports = router  
   