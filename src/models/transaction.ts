import crypto from 'crypto'

export class Transaction{
    private _id: string;
    get id(): string {
        return this._id;
    }

    private _title: string
    get title(): string {
        return this._title;
    }

    private _value: number
    get value(): number {
        return this._value;
    }

    private _type: "income" | "outcome" 
    get type():string {
        return this._type
    }


    constructor(title: string, value: number, type: "income" | "outcome"){
        this._id = crypto.randomUUID();
        this._title = title;
        this._value = value;
        this._type = type;
    }

    toJson(){
        return {
            id: this.id,
            title: this.title,
            value: this.value,
            type: this.type,
        }
    }

    updateInformation(title: string) {
        if (!title) throw new Error("Título inválido");
    
        this._title = title;
      }


}