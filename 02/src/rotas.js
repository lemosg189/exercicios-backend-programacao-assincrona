const express = require('express');
const pokemons = require('./controllers/pokemons')

const rotas = express();

rotas.get('/pokemon', pokemons.listaDePokemons)
rotas.get('/pokemon/:nomeOuIdDoPokemon', pokemons.consultarPokemons)


module.exports = rotas;