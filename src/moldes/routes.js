const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Acessar a rota , rota raiz "/",funções de requisição ao servidor , a resposta que vai se dar a requisição
routes.get('/products', ProductController.index);
module.exports = routes;