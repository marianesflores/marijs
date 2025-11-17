import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nome: { type: String, required: true },
});

const Categorias = model("Categorias", categoriaSchema);
export default Categorias