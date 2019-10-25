const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/tarefasConcluidas", controller.getCheck)
router.get("/:id", controller.getById)
router.get("/colaborador/:nome", controller.getColaborador)
router.get("/dias/filtrar", controller.getDiferencaDias)
router.get("/data/filtrar", controller.getMaisRecentes)

module.exports = router