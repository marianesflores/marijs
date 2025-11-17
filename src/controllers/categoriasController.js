import Categorias from "../models/categorias.js"

const buscarCategoria = async (req, res) => {
    const response = await Categorias.find()
    res.json(response)
}

const buscarCategoriaPorId = async (req, res) => {
    const {id} = req.params
    try {
        const categoria = await Categorias.findById(id)
        if (!categoria) {
            res.status(404).send("Categoria não encontrada")
            return
        } else {
            res.json(categoria)
        }
    } catch (err) {
        res.status(422).send("ID de categoria inválido.")
    }
}

const criarCategoria = (req, res) => {
    const { nome } = req.body
    if (!nome) {
        res.status(422).json({
            erro: true,
            mensagem: "Informações inválidas"
        })
        return
    }
    const categoria = new Categorias({
        nome
    })
    categoria.save().then(
        () => res.status(201).json({
            erro: false,
            mensagem: "Categoria criada com sucesso",
            categoria: categoria
        })
    ).catch(err => {
        res.status(422).json({
            erro: true,
            mensagem: "Informações inválidas"
        })
    })
}

const alterarCategoriaPorId = async (req, res) => {
    const {id} = req.params
    const { nome } = req.body
    if (!nome) {
        res.status(422).send("Informações inválidas")
        return
    }
    const response = await Categorias.findByIdAndUpdate(id, req.body)
    if (response) {
        res.send("Sucesso - Alteração feita")
    } else {
        res.send("Erro - Alteração não feita")
    }
}

const deletarCategoriaPorId= async (req, res) => {
    const {id} = req.params
    try {
        const categoria = await Categorias.findByIdAndDelete(id)
        if (!categoria) {
            res.status(404).send("Categoria não encontrada")
            return
        } else {
            res.send("Categoria deletada")
        }
    } catch (err) {
        res.status(422).send("ID de categoria inválido")
    }
}

export { buscarCategoria, buscarCategoriaPorId, criarCategoria, alterarCategoriaPorId, deletarCategoriaPorId }