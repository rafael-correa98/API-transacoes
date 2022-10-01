import { Request, Response, NextFunction } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { usersDB } from "../db/users";


export class ValidateCpfMiddleware {
  validateCpf(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (!cpfValidator.isValid(cpf)) {
      return response.status(400).json({ error: "CPF inválido" });
    }

    return next();

    
  }

  verifyCpfExists(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;    

    if (
      usersDB.some(
        (user) =>
          user.cpf.replace(/\W/g, "") === (cpf as string).replace(/\W/g, "")
      )
    ) {
      return response.status(400).json({ error: "CPF já cadastrado" });
    }

    return next();
  }
}
