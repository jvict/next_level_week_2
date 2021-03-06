//chamando o express e nunjucks
const express = require('express')
const server = express()


const {pageLanding,pageStudy,pageGiveClasses,saveClasses} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/view',{
    express:server,
    noCache:true,
})

//configurar aquivos statios(css,javascript)
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
.use(express.static("public"))
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5000)

