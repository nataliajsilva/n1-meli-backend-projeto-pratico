const express = require("express")
const router = express.Router()
const controller = require("../controllers/optusController")

router.get("/", controller.get)
router.get("/Duracao",controller.getDuracao)
router.get("/genero/:nome", controller.getGenero)
router.get("/:id", controller.getById)


module.exports = router