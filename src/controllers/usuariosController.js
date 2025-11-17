import Usuarios from "../models/usuarios.js"

const buscarUsuario = async (req, res) => {
    const response = await Usuarios.find()
    res.json(response)
}

const buscarUsuarioPorId= async (req, res) => {
    const {id} = req.params
    try {
        const usuario = await Usuarios.findById(id)
        if (!usuario) {
            res.status(404).send("Categoria não encontrada")
            return
        } else {
            res.json(usuario)
        }
    } catch (err) {
        res.status(422).send("ID de usuário inválido")
    }
}

const criarUsuario = (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        res.status(422).json({
            erro: true,
            mensagem: "Informações inválidas"
        })
        return
    }
    const usuario = new Usuarios({
        nome, email, senha
    })
    usuario.save().then(
        () => res.status(201).json({
            erro: false,
            mensagem: "Usuário criado com sucesso",
            usuario: usuario
        })
    ).catch(err => {
        res.status(422).json({
            erro: true,
            mensagem: "Informações inválidas"
        })
    })
}

const alterarUsuarioPorId = async (req, res) => {
    const {id} = req.params
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        res.status(422).send("Informações inválidas")
        return
    }
    const response = await Usuarios.findByIdAndUpdate(id, req.body)
    if (response) {
        res.send("Sucesso - Alteração feita")
    } else {
        res.send("Erro - Alteração não feita")
    }
}

const deletarUsuarioPorId= async (req, res) => {
    const {id} = req.params
    try {
        const usuario = await Usuarios.findByIdAndDelete(id)
        if (!usuario) {
            res.status(404).send("Usuário não encontrado")
            return
        } else {
            res.send("Usuário deletado")
        }
    } catch (err) {
        res.status(422).send("ID de usuário inválido")
    }
}

export { buscarUsuario, buscarUsuarioPorId, criarUsuario, alterarUsuarioPorId, deletarUsuarioPorId }