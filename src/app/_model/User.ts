import {ProgLanguage} from "./prog-language";
import {Role} from "./role";

export interface User {
    id:number;
    name:string;
    username:string|null;
    password:string;
    email:string;
    dateOfBirth:any;
    gender:string;
    avatar:string;
    address:string;
    citizenIdentity: number;
    status:number;
    teams:any;
    roles:Role[]
}
