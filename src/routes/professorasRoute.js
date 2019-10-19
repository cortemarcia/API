const express= require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")// juntas info de rota já criada com o controller

router.get("/", controller.get)// Ao acessar / ir oara controller
router.get("/:id", controller.getById)

module.exports = router