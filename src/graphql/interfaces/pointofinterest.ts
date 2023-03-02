import { ICategory } from "./category";
import { ICity } from "./city";
import { IComment } from "./comment";
import { IPicture } from "./picture";
import { IUser } from "./user";

export interface IPointOfInterest {
  id: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  created_at: Date;
  updated_at: Date;
  cityId: number;
  userId: number;
  createdById: number;
  updatedById: number;
  adress: string;
  createdBy: IUser;
  updatedBy: IUser;
  comments: IComment;
  pictures: IPicture;
  city: ICity;
  categories: ICategory;
}
