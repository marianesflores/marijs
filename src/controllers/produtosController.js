import Produtos from "../models/produtos.js"

const buscarProduto = async (req, res) => {
    const response = await Produtos.find()
    res.json(response)
}

const buscarProdutoPorId = async (req, res) => {
    const {id} = req.params
    try {
        const produto = await Produtos.findById(id)
        if (!artista) {
            res.status(404).send("Produto não encontrado")
            return
        } else {
            res.json(artista)
        }
    } catch (err) {
        res.status(422).send("ID de produto inválido")
    }
}

const criarProduto = (req, res) => {
    const { nome, preco, categoria } = req.body
    if (!nome || !preco || !categoria) {
        res.status(422).json({
            erro: true,
            message: "Informações inválidas"
        })
        return
    }
    const produto = new Produtos({
        nome, preco, categoria
    })
    produto.save().then(
        () => res.status(201).json({
            erro: false,
            message: "Produto criado com sucesso",
            produto: produto
        })
    ).catch(err => {
        res.status(422).json({
            erro: true,
            message: "Informações inválidas"
        })
    })
}

const alterarProdutoPorId = async (req, res) => {
    const {id} = req.params
    const {preco} = req.body
    if (!preco) {
        res.status(422).send("Informações inválidas")
    }
    const response = await Produtos.findByIdAndUpdate(id, {preco})
    if (response) {
        res.send("Sucesso - Alteração feita")
    } else {
        res.send("Erro - Alteração não feita")
    }
}

const deletarProdutoPorId = async (req, res) => {
    const {id} = req.params
    try {
        const produto = await Produtos.findByIdAndDelete(id)
        if (!produto) {
            res.status(404).send("Produto não encontrado")
            return
        } else {
            res.send("Produto deletado")
        }
    } catch (err) {
        res.status(400).send("ID de produto inválido")
    }
}

export { buscarProduto, buscarProdutoPorId, criarProduto, alterarProdutoPorId, deletarProdutoPorId }