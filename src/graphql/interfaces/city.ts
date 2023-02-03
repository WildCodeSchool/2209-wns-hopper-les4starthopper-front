import { iPointOfInterest } from "./pointofinterest";
import { iUser } from "./user";

export interface iCity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  created_at: Date;
  updated_at: Date;
  userId: number;
  createdById: number;
  updatedById: number;
  createdBy: iUser;
  updatedBy: iUser;
  pointOfInterests: iPointOfInterest;
}
