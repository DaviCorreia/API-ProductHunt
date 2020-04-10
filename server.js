//Importando a função express
const express = require('express');

//importando o monggose ,que é uma forma realação de transformar as tabelas de bd em objetos de JS
const mongoose =require('mongoose');

//importnado função que faz o require automaticamente
const requireDir = require('require-dir');

//Executando a função
const app = express();

// iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true, useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true });


requireDir('./src/moldes'); 

//Acessar a rota , rota raiz "/",funções de requisição ao servidor , a resposta que vai se dar a requisição
app.get('/',(req,rest)=>{
  rest.send("Hello DAVI desenvolvendo em NodeJS");
})

//Aplicação usar porta 3001
app.listen(3001);