import { IPointOfInterest } from "./pointofinterest";
import { IUser } from "./user";

export interface ICity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  created_at: Date;
  updated_at: Date;
  userId: number;
  createdById: number;
  updatedById: number;
  createdBy: IUser;
  updatedBy: IUser;
  pointOfInterests: IPointOfInterest;
}
