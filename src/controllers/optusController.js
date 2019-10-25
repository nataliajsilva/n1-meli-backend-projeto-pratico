// - buscar todos os filmes com uma data de lançamento superior a data atual;

const optus = require("../model/optus.json")

exports.get = (request,response) => {
    console.log(request.url)
    response.status(200).send(optus)
} 
exports.getById = (request, response) => {
    const id = request.params.id
    if(id <= 0 || id > 3){
        //response.redirect(301,"https:google.com.br")
        response.send('Id não encontrado na lista de filmes')
    }
    //console.log(id)
    response.status(200).send(optus.find(optus => optus.id == id))
}
exports.getGenero = (request,response) => {

    const nome = request.params.nome
    response.status(200).send(optus.filter(item => item.genero == nome))
}
exports.getDuracao = (request,response) => {

    const duracaoFilme = optus.filter(item => item.duracao > 120)
    response.status(200).send(duracaoFilme)
}
