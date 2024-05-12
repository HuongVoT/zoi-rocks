import { Kudos } from "../../models";

export interface CreateKudosDTO {
  senderId: string;
  receiverId: string;
  categories: string[];
  description: string;
}

export interface CreateKudosOutputDTO {
  kudos: Kudos;
}
