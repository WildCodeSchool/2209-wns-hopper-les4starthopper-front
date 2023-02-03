import { iPointOfInterest } from "./pointofinterest";
import { iUser } from "./user";

export interface iCategory {
  id: number;
  name: string;
  userId: number;
  createdById: number;
  updatedById: number;
  icon: string;
  created_at: Date;
  updated_at: Date;
  createdBy: iUser;
  updatedBy: iUser;
  pointOfInterests: iPointOfInterest;
}
