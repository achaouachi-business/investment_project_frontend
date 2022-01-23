import { Autority } from "./autority";
import { User } from "./user";

export class Roles{
    id! : string;
    nom!: string;
    users: User[]= new Array();
    autorities: Autority[]= new Array();
}