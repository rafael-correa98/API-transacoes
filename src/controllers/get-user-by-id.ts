import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetUserByIdController {
    getUser(request: Request, response: Response) {
    
    const userFilter = usersDB.filter(user => user.id == String(request.params.id))

    const userIdMap = userFilter.map(user=>{
        return {
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            age: user.age
        }
    })
    
    return response.json(userIdMap[0])
  }
}