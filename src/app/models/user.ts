import { Roles } from "./roles";

export class User{
    id!: string;
    nom!: string;
    prenom!: string;
    specialite!: string;
    matricule!: string;
    adresse!: string;
    telephone!: number;
    email!: string;
    password!: string;
    roles: Roles[] = new Array();
}