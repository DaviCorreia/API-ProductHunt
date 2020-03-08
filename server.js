//Importando a função express
const express = require('express');
//Executando a função
const app = express();
//Acessar a rota , rota raiz "/",funções de requisição ao servidor , a resposta que vai se dar a requisição
app.get('/',(req,rest)=>{
  rest.send("Hello Davi");
})
//Aplicação usar porta 3001
app.listen(3001);