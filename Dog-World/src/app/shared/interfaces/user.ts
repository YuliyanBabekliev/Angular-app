import { IComment } from "./comment";
import { IDog } from "./dog";

export interface IUser{
    id: number;
    username: string;
    email: string;
    gender: string;
    favouriteDogs: IDog[];
    comments: IComment[];
}