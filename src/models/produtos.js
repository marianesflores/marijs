import { Schema, model } from "mongoose";

const produtoSchema = new Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: Schema.Types.ObjectId, ref: "categorias", required: true }
});

const Produtos = model("Produtos", produtoSchema);
export default Produtos