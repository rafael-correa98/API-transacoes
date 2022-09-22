import crypto from 'crypto'
import { Transaction } from './transaction'

export class User{
    private _id: string
    get id(): string {
        return this._id;
    }

    private _name: string
    get name(): string {
        return this._name;
    }

    private _cpf: string
    get cpf(): string {
        return this._cpf;
    }

    private _email: string
    get email(): string {
        return this._email;
    }

    private _age: number
    get age(): number {
        return this._age;
    }

    private _transactions: Transaction[] = []
    get transactions(): Transaction[] {
        return this._transactions;
    }

    constructor(name: string, cpf: string, email: string, age: number){
        this._id = crypto.randomUUID();
        this._name = name;
        this._cpf = cpf;
        this._email = email;
        this._age = age;
    }

    toJson(){
        return {
        id: this.id,
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        age: this.age,
        }
    }

    updateInformation(name: string, cpf: string, email: string) {
        if (!name) throw new Error("Nome inválido");
        if (!cpf) throw new Error("Cpf inválido");
        if (!email) throw new Error("Email inválido");
    

    
        this._name = name;
        this._cpf = cpf;
        this._email = email;
      }


}