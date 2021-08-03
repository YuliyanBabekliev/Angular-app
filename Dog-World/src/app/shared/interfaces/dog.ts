import { IComment } from "./comment";

export interface IDog{
    id: number;
    breed: string;
    description: string;
    maleWeight: string;
    femaleWeight: string;
    life: string;
    imgUrl: string;
    comments: IComment[];
}