import { Request, Response } from "express";
import { usersDB } from "../db/users";
import { Transaction } from "../models/transaction";


export class CreateTransactionController {
    create(request: Request, response: Response) {
        const { title, value, type } = request.body;
  
        const {userId} = request.params

        const transaction = new Transaction(title, value, type);

        const userIndex = usersDB.findIndex(user => user.id === userId)
  
        usersDB[userIndex].transactions.push(transaction)

        return response.json(transaction.toJson())

    }
  }