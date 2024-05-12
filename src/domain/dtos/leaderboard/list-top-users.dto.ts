import type { User } from "../../models";

export interface ListTopUsersDTO {
  sortBy: "sends" | "receives";
}

export interface ListTopUsersOutputDTO {
  users: User[];
}
