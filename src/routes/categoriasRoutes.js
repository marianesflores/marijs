import { Router } from "express"
import { buscarCategoria, buscarCategoriaPorId, criarCategoria, alterarCategoriaPorId, deletarCategoriaPorId } from "../controllers/categoriasController.js"
const categoriasRouter = Router()

categoriasRouter.get("/", buscarCategoria)
categoriasRouter.get("/:id", buscarCategoriaPorId)
categoriasRouter.post("/", criarCategoria)
categoriasRouter.put("/:id", alterarCategoriaPorId)
categoriasRouter.delete("/:id", deletarCategoriaPorId)

export default categoriasRouter