function acessarFotos (req,res){
    res.send('<form action="/profile" method="post" enctype="multipart/form-data"><input type="file" name="avatar" /><button class="enviarfoto" type = "submit" name="enviarfoto">Envite</button></form>')
}

module.exports = acessarFotos