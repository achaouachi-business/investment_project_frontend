import { Societe } from "./societe";

export class Transaction{
    id!: string;
    description!: string ;
    unitPrice!: any;
    quantity!: any;
    date!: any;
    societe!: Societe;
}