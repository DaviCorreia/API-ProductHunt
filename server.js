//Importando a função express
const express = require('express');

//importando o monggose ,que é uma forma realação de transformar as tabelas de bd em objetos de JS
const mongoose =require('mongoose');

//importnado função que faz o require automaticamente
const requireDir = require('require-dir');

//Executando a função
const app = express();

// iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true,  useCreateIndex: true,useUnifiedTopology: true });
//const client = new MongoClient('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true,  useCreateIndex: true,UnifiedTopology: true });

requireDir('./src/moldes'); 

//rotas
app.use('/api',require('./src/routes'));

//Aplicação usar porta 3001
app.listen(3001);