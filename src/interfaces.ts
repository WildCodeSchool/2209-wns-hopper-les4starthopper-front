export interface Iwilder {
  id: number;
  name: string;
  city: string;
  upvotes: any;
  onWilderDeleted: Function;
  wilder?: any;
  idFromWilder: Function;
}

export interface Iskill {
  skills: any;
  id: number;
  name: string;
  upvote: number;
  upvotes: number;
  refresh: Function;
  // onUpvote: Function;
}
