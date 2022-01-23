import { Societe } from "./societe";
import { Transaction } from "./transaction";
import { User } from "./user";

export class Gestionneur{
    user: User = new User();
    societes: Societe[] = new Array();
    transaction: Transaction[] = new Array()
}