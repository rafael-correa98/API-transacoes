import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class GetAllTransactionsController {
  getAllTransactions(request: Request, response: Response) {
    const {userId} = request.params

    const { title, type } = request.query
    
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

    
    if(title) {
      transactions = transactions.filter(transaction => {
        return transaction.title
        .toLowerCase()
        .includes(title.toString().toLowerCase())
      })
      return response.json(transactions)
    }
    
    if(type) {
      transactions = transactions.filter(transaction => {
        return transaction.type
        .toLowerCase()
        .includes(type.toString().toLowerCase())
      })
      return response.json(transactions)
    }
    
    const data = {
      transactions, 
      balance
    }

    return response.json(data)
  }
}