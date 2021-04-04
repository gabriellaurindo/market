//Importando módulos
const express = require('express')
const merc = require('../api/models/Mercado')
const prod = require('../api/models/Produto')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial
router.get('/', (req, res) =>{
  merc.find({}).then(mercados =>{
    prod.find({}).then(produtos =>{
      res.render("pages/index", {mercados, produtos})
    })  
  })
})

//Exportando rota  
module.exports = router  
   