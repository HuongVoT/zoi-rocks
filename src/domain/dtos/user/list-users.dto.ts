import type { User } from "../../models";

export interface ListUsersDTO {
  limit: number;
  lastKey?: string;
  email?: string;
}

export interface ListUsersOutputDTO {
  users: User[];
  pagination: {
    limit: number;
    lastKey?: string;
  };
}
