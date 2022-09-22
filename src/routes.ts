import { Express } from "express";
import { CreateUserController } from "./controllers/create-user";
import { GetUserByIdController } from "./controllers/get-user-by-id";
import { GetAllUsersController } from "./controllers/get-all-users"

export default (app: Express) => {
    app.get('/', (request, response) => {
        return response.send('OK');
    });

    app.post('/users', new CreateUserController().create)
    app.get('/users/:id', new GetUserByIdController().getUser)
    app.get('/users', new GetAllUsersController().getAllUsers)
};