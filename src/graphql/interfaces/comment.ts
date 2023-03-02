import { IPointOfInterest } from "./pointofinterest";
import { IUser } from "./user";

export interface IComment {
  id: number;
  comment: string;
  note: number;
  created_at: Date;
  updated_at: Date;
  userId: number;
  createdById: number;
  updatedById: number;
  pointOfInterestId: number;
  createdBy: IUser;
  updatedBy: IUser;
  pointOfInterest: IPointOfInterest;
}
