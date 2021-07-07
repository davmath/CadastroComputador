console.clear();

import express from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";
import cors from 'cors'



const app = express();
const db = mongoose.connection;
const port = 3000



db.on("error", (error)=> console.error(error))
db.once("open", ()=> console.log("Connected to database!"))



app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta http://localhost:${port}`);
})
