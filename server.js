const app = require("./src/app");
const port = 3000

app.listen(port,function(){
    console.log(`app está rodando na porta ${port}`)// Facilitar a vida quando estiver visualizando no terminal e for rodar o NODEMON 
});



