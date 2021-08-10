import { Timestamp } from "rxjs";
import { IDog } from "./dog";
import { IUser } from "./user";

export interface IComment{
    id: number;
    comment: string;
    dateAndTime: Date;
    user: IUser;
    dog: IDog;
}