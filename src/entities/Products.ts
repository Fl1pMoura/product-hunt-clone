import { Tags } from "./Tags";

export interface Product {
  name: string;
  description: string;
  url: string;
  creatorId: string;
  creator?: string;
  createdAt: string;
  upvotesCount: number;
  tags: Tags[];
}
