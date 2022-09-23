import {Request, Response} from "express"
import { usersDB } from "../db/users";


export class DeleteTransactionController {
 deleteTransaction(request:Request, response:Response){
    const { userId, id } = request.params;
    
    const indexUser = usersDB.findIndex((user)=> user.id === userId);

    const transaction = usersDB[indexUser].transactions
    .find(transaction => transaction.id === id )


    const transactionIndex = usersDB[indexUser].transactions
    .findIndex(transaction => transaction.id === id )

    if(indexUser < 0){
        return response.status(404).json({error: "Usuário não encontrado"})
    }
    if(transactionIndex < 0){
        return response.status(404).json({error: "Transação não encontrada"})
    }

    usersDB[indexUser].transactions.splice(transactionIndex,1);


    return response.status(200).json(`Transação ${transaction?.title}, ${transaction?.value},  excluída com sucesso!!`);
 }
}