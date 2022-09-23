import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetAllTransactionsController {
    getAllTransactions(request: Request, response: Response) {
    const {userId} = request.params
    
    const userIndex = usersDB.findIndex(user => user.id === userId)

    let transactions = usersDB[userIndex].transactions.map(transaction => transaction.toJson())
    
    const valueIncome = transactions.filter(transaction => transaction.type === "income")
    .map(transaction =>{
      return transaction.value
    })
    .reduce((prev, curr) => prev + curr, 0)

    const valueOutcome = transactions.filter(transaction => transaction.type === "outcome")
    .map(transaction =>{
      return transaction.value
    })
    .reduce((prev, curr) => prev + curr, 0)

    const balance = {
      income: valueIncome,
      outcome: valueOutcome,
      total: valueIncome - valueOutcome
    }

    const data = {
      transactions, 
      balance}
    
    return response.json(data)
  }
}