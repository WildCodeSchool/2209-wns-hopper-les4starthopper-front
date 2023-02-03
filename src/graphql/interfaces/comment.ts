import { iPointOfInterest } from "./pointofinterest";
import { iUser } from "./user";

export interface iComment {
  id: number;
  comment: string;
  note: number;
  created_at: Date;
  updated_at: Date;
  userId: number;
  createdById: number;
  updatedById: number;
  pointOfInterestId: number;
  createdBy: iUser;
  updatedBy: iUser;
  pointOfInterest: iPointOfInterest;
}
