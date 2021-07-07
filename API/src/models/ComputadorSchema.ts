import { model, Schema } from "mongoose";

const computadorSchema = new Schema(
  {
    dono: {
      type: String,
      required: [true, "O campo DONO é obrigatório!"],
    },
    placamae: {
      type: String,
      required: [true, "O campo PLACA MÃE é obrigatório!"],
    },
    processador: {
      type: String,
      required: [true, "O campo PROCESSADOR é obrigatório!"],
    },
    memoria: {
      type: Number,
      required: [true, "O campo MEMÓRIA é obrigatório!"],
    },
    armazenamento: {
      type: String,
      required: [true, "O campo ARMAZENAMENTO é obrigatório!"],
    },
    fonte: {
      type: String,
      required: [true, "O campo FONTE é obrigatório!"],
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

export default model("Computador", computadorSchema);
