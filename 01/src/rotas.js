const express = require('express')
const produtos = require('./controllers/produtos.js')

const rotas = express()

rotas.get('/produtos', produtos.listagemProdutos)
rotas.get('/produtos/:id', produtos.consultarProdutos)
rotas.get('/produtos/:id/frete/:cep', produtos.consultarFreteProdutos)


module.exports = rotas
