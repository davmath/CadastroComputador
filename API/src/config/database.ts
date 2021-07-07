import mongoose from "mongoose";


mongoose
  .connect(
    "mongodb+srv://davmath:davmath@cluster0.nuyrz.mongodb.net/computador-db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco: ${error}`);
  });

export { mongoose };
