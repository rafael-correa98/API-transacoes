import { Express } from "express";
import { CreateUserController } from "./controllers/create-user";
import { GetUserByIdController } from "./controllers/get-user-by-id";
import { GetAllUsersController } from "./controllers/get-all-users"
import { DeleteUserController } from "./controllers/delete-user";

export default (app: Express) => {
    app.get('/', (request, response) => {
        return response.send('OK');
    });

    app.post('/users', new CreateUserController().create)
    app.get('/users/:id', new GetUserByIdController().getUserById)
    app.get('/users', new GetAllUsersController().getAllUsers)
    app.delete('/users/:id', new DeleteUserController().delete)
};