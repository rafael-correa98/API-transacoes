import { Request, Response } from "express";
import { usersDB } from "../db/users";
export class GetTransactionByIdController{
    getTransactionsById(request: Request, response: Response) {
      const {userId, id} = request.params
    
      const userIndex = usersDB.findIndex(user => user.id === userId)
      
      let transaction = usersDB[userIndex].transactions
      .map(transaction => transaction.toJson())
      .find((transaction)=> transaction.id === id)
    
      return response.json(transaction)
    }
}