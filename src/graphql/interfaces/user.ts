import { iCategory } from "./category";
import { iCity } from "./city";
import { iComment } from "./comment";
import { iPicture } from "./picture";
import { iPointOfInterest } from "./pointofinterest";

export interface iUser {
  email: string;
  password: string;
  role: number;
  id: number;
  createdById: number;
  updatedById: number;
  created_at: Date;
  updated_at: Date;
  createdBy: iUser;
  updatedBy: iUser;
  comments: iComment;
  pictures: iPicture;
  categories: iCategory;
  pointOfInterests: iPointOfInterest;
  cities: iCity;
}
