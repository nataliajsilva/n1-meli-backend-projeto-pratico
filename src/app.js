const express = require('express')
const app = express ()

// rotas
const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.use(function(request,response,next){
    response.header('Access-Control-Allow-Origin','*')
    response.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type,Acecept')
    next ()
})

app.use('/', index)
app.use('/tarefas',tarefas)

module.exports = app