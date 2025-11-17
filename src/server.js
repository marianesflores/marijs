import categoriasRouter from "./routes/categoriasRoutes.js"
import produtosRouter from "./routes/produtosRoutes.js"
import usuariosRouter from "./routes/usuariosRoutes.js"
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/categorias", categoriasRouter)
app.use("/produtos", produtosRouter)
app.use("/usuarios", usuariosRouter)

mongoose.connect("mongodb://localhost:27017").then(console.log("Conexão realizada com Mongo")).catch((err) => console.log("Erro na conexão com Mongo"))

app.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333");
})