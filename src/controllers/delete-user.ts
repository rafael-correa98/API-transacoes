import {Request, Response} from "express"
import { usersDB } from "../db/users";


export class DeleteUserController {
 delete(request:Request, response:Response){
    const { id } = request.params;

    const indexUser = usersDB.findIndex((user)=> user.id === id);

    if(indexUser < 0){
        return response.status(404).json({error: "Usuário não encontrado"})
    }
    usersDB.splice(indexUser,1);
    return response.status(200).json();
 }
}