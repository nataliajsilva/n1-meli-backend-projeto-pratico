const express = require ('express')
const router = express.Router()

router.get('/', function(request, response){
    response.status(200).send({
        title: "Projeto API - Meli",
        version: '0.0.1'
    })
})

module.exports = router