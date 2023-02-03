import { iPointOfInterest } from "./pointofinterest";
import { iUser } from "./user";

export interface iPicture {
  id: number;
  url: string;
  pointOfInterestId: number;
  userId: number;
  createdById: number;
  created_at: Date;
  updated_at: Date;
  createdBy: iUser;
  pointOfInterest: iPointOfInterest;
}
