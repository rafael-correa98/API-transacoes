import { Request, Response } from "express";
import { usersDB } from "../db/users";

export class UpdateTransactionController {
  updateTransaction(request: Request, response: Response) {
    const { userId, id } = request.params;

    const { title } = request.body;

    const userIndex = usersDB.findIndex(user => user.id === userId)
      
      const transaction = usersDB[userIndex].transactions
      .find((transaction)=> transaction.id === id)
    
        if (!transaction) {
            return response.status(404).json({ error: "Usuário não encontrado" });
          }
      
        try {
            transaction.updateInformation(title);
        } catch (err: any) {
            return response.status(400).json({ error: err.message });
        }

      return response.json(transaction)

    // return response.json(user.toJson());
  }
}
