import { Request, Response } from "express";
import ComputadorSchema from "../models/ComputadorSchema";

class ComputadorController {

//Listar Computador

  public async listar(request: Request, response: Response) {
    response.status(200).json(await ComputadorSchema.find({}));
  }

//Cadastrar Computador

  public async cadastrar(request: Request, response: Response) {
    const novoComputador = await ComputadorSchema.create(request.body);
    response.status(201).json(novoComputador);
  }

//Deletar Computador
  public async remover(request: Request, response: Response) {
    const { id } = request.params;
    const remove = await ComputadorSchema.findByIdAndRemove({_id: id});
    response.status(200).json(remove);
}
}

export { ComputadorController };
