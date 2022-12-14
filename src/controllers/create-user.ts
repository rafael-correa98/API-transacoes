import { Request, Response } from "express";
import { usersDB } from "../db/users";
import { User } from "../models/user";


export class CreateUserController {
    create(request: Request, response: Response) {
      const { name, cpf, email, age } = request.body;
  
      const user = new User(name, cpf, email, age);
      
      usersDB.push(user);
  
      return response.json(user.toJson());
    }
  }