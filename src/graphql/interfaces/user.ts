import { ICategory } from "./category";
import { ICity } from "./city";
import { IComment } from "./comment";
import { IPicture } from "./picture";
import { IPointOfInterest } from "./pointofinterest";

export interface IUser {
  email: string;
  password: string;
  role: number;
  id: number;
  createdById: number;
  updatedById: number;
  created_at: Date;
  updated_at: Date;
  createdBy: IUser;
  updatedBy: IUser;
  comments: IComment;
  pictures: IPicture;
  categories: ICategory;
  pointOfInterests: IPointOfInterest;
  cities: ICity;
}
