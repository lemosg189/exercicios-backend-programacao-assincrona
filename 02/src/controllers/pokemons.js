const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaDePokemons = async (req, res) => {

    const lista = await listarPokemons(10)
    return res.json(lista.results)
}

const consultarPokemons = async (req, res) => {
    const { nomeOuIdDoPokemon } = req.params

    const detalhar = await detalharPokemon(nomeOuIdDoPokemon)

    const { id, name, height, weight, base_experience, forms, abilities, species } = detalhar

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species })
}


module.exports = {
    listaDePokemons,
    consultarPokemons
}