//Importando módulos
const express = require('express')
const merc = require('../api/models/Mercado')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial
router.get('/', (req, res) =>{
  merc.find({}).then(mercados =>{
    res.render("pages/index", {mercados})
})
  })

//Exportando rota  
module.exports = router  
   