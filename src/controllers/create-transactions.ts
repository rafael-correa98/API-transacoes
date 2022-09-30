import { Request, Response } from "express";
import { usersDB } from "../db/users";
import { Transaction } from "../models/transaction";


export class CreateTransactionController {
    create(request: Request, response: Response) {
        const { title, value, type } = request.body;
  
        const {userId} = request.params

        const transaction = new Transaction(title, value, type);

        const user = usersDB.find(user => user.id === userId)
            
        if (!user) {
            return response.status(404).json({ error: "Growdever não encontrado" });
        }
        
        try { console.log(user)
            user.newTransactions(transaction);
            console.log(user)
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
  
        // usersDB[userIndex].transactions.push(transaction)



        return response.json(transaction.toJson())

    }
  }