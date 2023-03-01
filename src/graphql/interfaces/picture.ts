import { IPointOfInterest } from "./pointofinterest";
import { IUser } from "./user";

export interface IPicture {
  id: number;
  url: string;
  pointOfInterestId: number;
  userId: number;
  createdById: number;
  created_at: Date;
  updated_at: Date;
  createdBy: IUser;
  pointOfInterest: IPointOfInterest;
}
