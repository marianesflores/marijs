import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nome: { type: String, required: true },
});

export const Categoria = model("categorias", categoriaSchema);