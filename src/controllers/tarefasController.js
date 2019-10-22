const tarefas = require("../model/tarefas.json")

exports.get = (request,response) => {
    console.log(request.url)
    response.status(200).send(tarefas)
} 

exports.getById = (request, response) => {
    const id = request.params.id
    if(id <= 0 || id > 10){
        response.redirect(301,"https:google.com.br")
        //response.send('Id não encontrado na lista de tarefas')
    }
    //console.log(id)
    response.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}
