import { IComment } from "./comment";
import { IDog } from "./dog";

export interface IUser{
    id: number;
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
    gender: string;
    dogs: IDog[];
    comments: IComment[];
}