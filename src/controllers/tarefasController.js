const tarefas = require("../model/tarefas.json")

exports.get = (request,response) => {
    console.log(request.url)
    response.status(200).send(tarefas)
} 

exports.getById = (request, response) => {
    const id = request.params.id
    if(id <= 0 || id > 10){
        //response.redirect(301,"https:google.com.br")
        response.send('Id não encontrado na lista de tarefas')
    }
    //console.log(id)
    response.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}

exports.getCheck = (request,response) => {

    const conclusaoTarefa = tarefas.filter(tarefa => tarefa.check == "true")
    response.status(200).send(conclusaoTarefa)
}

exports.getColaborador = (request,response) => {

    const nome = request.params.nome
    response.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome))
}
exports.getDiferencaDias = (req, res) => {
    tarefas.forEach(element => {
      // element.outraChave = "a";
      console.log(
        Math.abs(
          new Date(
            element.dataConclusao.split("/")[2],
            element.dataConclusao.split("/")[1],
            element.dataConclusao.split("/")[0]
          )
        )
      );
      const diferencaTempo = Math.abs(
        new Date(
          element.dataConclusao.split("/")[2],
          element.dataConclusao.split("/")[1],
          element.dataConclusao.split("/")[0]
        ) -
          new Date(
            element.dataInclusao.split("/")[2],
            element.dataInclusao.split("/")[1],
            element.dataInclusao.split("/")[0]
          )
      );
      const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
      element.tempoLevado = diferencaDias;
      // new Date(
      //   element.dataConclusao.split("/")[2],
      //   element.dataConclusao.split("/")[1],
      //   element.dataConclusao.split("/")[0]
      // ) -
      // new Date(
      //   element.dataInclusao.split("/")[2],
      //   element.dataInclusao.split("/")[1],
      //   element.dataInclusao.split("/")[0]
      // );
    });
    res.status(200).send(tarefas);
  };
  
  exports.getMaisRecentes = (req, res) => {
    // tarefas.forEach(element => {
    //   console.log(element.dataConclusao)
    //   console.log(
    //     new Date(
    //       element.dataConclusao.split("/")[2],
    //       element.dataConclusao.split("/")[1],
    //       element.dataConclusao.split("/")[0]
    //     )
    //   );
    // });
  
    // console.log(
    //   tarefas.sort(function(a, b) {
    //     return (
    //       new Date(
    //         b.dataConclusao.split("/")[2],
    //         b.dataConclusao.split("/")[1],
    //         b.dataConclusao.split("/")[0]
    //       ) -
    //       new Date(
    //         a.dataConclusao.split("/")[2],
    //         a.dataConclusao.split("/")[1],
    //         a.dataConclusao.split("/")[0]
    //       )
    //     );
    //   })
    // );
  
    const resultado = tarefas.sort(function(a, b) {
      return (
        new Date(
          b.dataConclusao.split("/")[2],
          b.dataConclusao.split("/")[1],
          b.dataConclusao.split("/")[0]
        ) -
        new Date(
          a.dataConclusao.split("/")[2],
          a.dataConclusao.split("/")[1],
          a.dataConclusao.split("/")[0]
        )
      );
    });
  
    // res.status(200).send(tarefas);
    res.status(200).send(resultado);
  };