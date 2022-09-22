import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetUserByIdController {
    getUserById(request: Request, response: Response) {

        const {id} = request.params;
    
    const user = usersDB.find(user => user.id === id)
   
    if (!user) {
        return response.status(404).json({ error: "Usuário não encontrado" });
      }
  

    return response.json(user.toJson());
       
    }

    
  }

