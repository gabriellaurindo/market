//Importando módulos
const express = require('express')
const prod = require('../api/models/Produto')
const merc = require('../api/models/Mercado')


//Atribuindo uma função do express a uma constante router 
const router =  express.Router()

//Rota inicial do painel

router.post('/panel-mercado', (req,res) =>{
    const {id} = req.body
    merc.findById(id).then(mercado =>{
        prod.find({id_mercado:mercado._id}).then(produtos=>{
            res.render('pages/dashboard-mercado', {produtos, mercado})
        }) 
    })
})  

//Exportando rota  
module.exports = router  
   