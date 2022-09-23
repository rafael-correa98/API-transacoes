import { Express } from "express";
import { CreateUserController } from "./controllers/create-user";
import { GetUserByIdController } from "./controllers/get-user-by-id";
import { GetAllUsersController } from "./controllers/get-all-users"
import { DeleteUserController } from "./controllers/delete-user";
import { UpdateUserController } from "./controllers/update-user";
import { CreateTransactionController } from "./controllers/create-transactions";
import {GetAllTransactionsController} from "./controllers/get-all-transactions";
import {GetTransactionByIdController} from "./controllers/get-transaction-by-id";
import { UpdateTransactionController } from "./controllers/update-transactions";
import { DeleteTransactionController } from "./controllers/delete-transaction";

export default (app: Express) => {
    app.get('/', (request, response) => {
        return response.send('OK');
    });

    app.post('/users', new CreateUserController().create)
    app.get('/users/:id', new GetUserByIdController().getUserById)
    app.get('/users', new GetAllUsersController().getAllUsers)
    app.delete('/users/:id', new DeleteUserController().delete)
    app.put('/users/:id', new UpdateUserController().update)
    app.post('/user/:userId/transactions', new CreateTransactionController().create)
    app.get('/user/:userId/transactions/:id', new GetTransactionByIdController().getTransactionsById)
    app.get('/user/:userId/transactions', new GetAllTransactionsController().getAllTransactions)
    app.put('/user/:userId/transactions/:id', new UpdateTransactionController().updateTransaction)
    app.delete('/user/:userId/transactions/:id', new DeleteTransactionController().deleteTransaction)
};