import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetAllTransactionsController {
    getAllTransactions(request: Request, response: Response) {
    const {userId} = request.params
    
    const userIndex = usersDB.findIndex(user => user.id === userId)
    
    let transactions = usersDB[userIndex].transactions.map(transaction => transaction.toJson())
    
    return response.json(transactions)
  }
}