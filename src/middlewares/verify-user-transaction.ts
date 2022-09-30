import {Request, Response, NextFunction} from 'express'
import { usersDB } from '../db/users';

export class verifyUserTransactionMiddleware{
    verifyUser(request: Request, response: Response, next: NextFunction) {
        const { userId } = request.params;
    
        if (usersDB.some((user) =>user.id !== (userId)))
         {
          return response.status(400).json({ error: "Usuário não localizado" });
        }
        next()
    }
 }