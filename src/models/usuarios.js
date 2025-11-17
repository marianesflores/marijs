import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }, 
});

const Usuarios = model("Usuarios", usuarioSchema);
export default Usuarios