import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetAllUsersController {
    getAllUsers(request: Request, response: Response) {
    const { name, email, cpf } = request.query

    let users = usersDB.map(user => user.toJson())

    if(name) {
        users = users.filter(user => {
            return user.name.
            toLowerCase()
            .includes(name.toString().toLowerCase())
        })
        return response.json(users)
    }

    if(email) {
        users = users.filter(user => {
            return user.email.
            toLowerCase()
            .includes(email.toString().toLowerCase())
        })
        return response.json(users)
    }

    if(cpf) {
        users = users.filter(user => {
            return user.cpf.
            toLowerCase()
            .includes(cpf.toString().toLowerCase())
        })
        return response.json(users)
    }
    
    return response.json(users)
  }
}