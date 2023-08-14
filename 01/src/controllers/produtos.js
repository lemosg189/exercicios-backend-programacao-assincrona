const { getStateFromZipcode } = require('utils-playground')
let { produtos } = require('../bancodedados/produtos.js')

const listagemProdutos = (req, res) => {
    return res.json(produtos)
}

const consultarProdutos = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.' })
    }

    const produto = produtos.find(produto => {
        return produto.id === +id
    })

    if (produto) {
        return res.json(produto)

    } else {
        return res.status(400).json({ mensagem: 'Não tem nenum produto com esse ID' })
    }
}

const consultarFreteProdutos = async (req, res) => {
    const { id, cep } = req.params

    if (isNaN(id) || isNaN(cep)) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID ou CEP da URL não é um número válido.' })
    }

    const produto = produtos.find(produto => {
        return produto.id === +id
    })

    if (produto) {
        const uf = await getStateFromZipcode(cep)
        return uf === 'SP' ? res.json({ produto, uf, frete: produto.valor * 0.15 }) :
            uf === 'RJ' ? res.json({ produto, uf, frete: produto.valor * 0.15 }) :
                uf === 'BA' ? res.json({ produto, uf, frete: produto.valor * 0.10 }) :
                    uf === 'SE' ? res.json({ produto, uf, frete: produto.valor * 0.10 }) :
                        uf === 'AL' ? res.json({ produto, uf, frete: produto.valor * 0.10 }) :
                            uf === 'PE' ? res.json({ produto, uf, frete: produto.valor * 0.10 }) :
                                uf === 'PB' ? res.json({ produto, uf, frete: produto.valor * 0.10 }) :
                                    res.json({ produto, uf, frete: produto.valor * 0.12 })

    } else {
        return res.status(400).json({ mensagem: 'Não tem nenum produto com esse ID' })
    }
}


module.exports = {
    listagemProdutos,
    consultarProdutos,
    consultarFreteProdutos,
}