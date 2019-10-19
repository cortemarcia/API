const express= require("express")
const router = express.Router()


router.get("/", function (req, res){
    res.status(200).send({
        title: "Reprograma Turma da Kelly",// usa {} por que estamos enviando em forma de objeto, uma vez que é lido em j.son
        version: "0.0.1"
    })
})

module.exports = router