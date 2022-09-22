import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetAllUsersController {
    getAllUsers(request: Request, response: Response) {
    const { name, email, cpf } = request.query
    if(name) {
        let userFilter = usersDB.filter(user => user.name.toLocaleLowerCase() == String(name).toLocaleLowerCase()).map(user=>{
            return {
                id: user.id,
                name: user.name,
                cpf: user.cpf,
                email: user.email,
                age: user.age
            }
        })
        return response.json(userFilter)
    }
    if(email) {
        let userFilter = usersDB.filter(user => user.email.toLocaleLowerCase() == String(email).toLocaleLowerCase()).map(user=>{
            return {
                id: user.id,
                name: user.name,
                cpf: user.cpf,
                email: user.email,
                age: user.age
            }
        })
        return response.json(userFilter)
    }
    if(cpf) {
        let userFilter = usersDB.filter(user => user.cpf.toLocaleLowerCase() == String(cpf).toLocaleLowerCase()).map(user=>{
            return {
                id: user.id,
                name: user.name,
                cpf: user.cpf,
                email: user.email,
                age: user.age
            }
        })
        return response.json(userFilter)
    }
    

    const userMap = usersDB.map(user=>{
        return {
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            age: user.age
        }
    })
    
    return response.json(userMap)
  }
}