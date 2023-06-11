import { IUser } from "./user";

export interface IPost {
  _id: number;
  title: string;
  shortDescription: string;
  content: string;
  author: IUser;
  createdAt: string;
}
