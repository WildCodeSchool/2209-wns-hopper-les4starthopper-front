import { IPointOfInterest } from "./pointofinterest";
import { IUser } from "./user";

export interface ICategory {
  id: number;
  name: string;
  userId: number;
  createdById: number;
  updatedById: number;
  icon: string;
  created_at: Date;
  updated_at: Date;
  createdBy: IUser;
  updatedBy: IUser;
  pointOfInterests: IPointOfInterest;
}
