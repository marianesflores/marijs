import { Router } from "express"
import { buscarProduto, buscarProdutoPorId, criarProduto, alterarProdutoPorId, deletarProdutoPorId } from "../controllers/produtosController.js"
const produtosRouter = Router()

produtosRouter.get("/", buscarProduto)
produtosRouter.get("/:id", buscarProdutoPorId)
produtosRouter.post("/", criarProduto)
produtosRouter.put("/:id", alterarProdutoPorId)
produtosRouter.delete("/:id", deletarProdutoPorId)

export default produtosRouter