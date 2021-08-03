import { Timestamp } from "rxjs";
import { IUser } from "./user";

export interface IComment{
    id: number;
    comment: string;
    dateAndTime: Date;
    user: IUser;
}