//Importando módulos
const express = require('express')

//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial
router.get('/', (req, res) =>{
    res.render("pages/index")
  })

//Exportando rota  
module.exports = router  
   