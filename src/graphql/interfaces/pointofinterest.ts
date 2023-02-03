import { iCategory } from "./category";
import { iCity } from "./city";
import { iComment } from "./comment";
import { iPicture } from "./picture";
import { iUser } from "./user";

export interface iPointOfInterest {
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
  createdBy: iUser;
  updatedBy: iUser;
  comments: iComment;
  pictures: iPicture;
  city: iCity;
  categories: iCategory;
}
