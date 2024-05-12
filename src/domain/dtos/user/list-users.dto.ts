import type { User } from "../../models";

export interface UsersLastKey {
  PK: string;
  entity: string;
  email: string;
}

export interface ListUsersDTO {
  limit: number;
  lastKey?: UsersLastKey;
  email?: string;
}

export interface ListUsersOutputDTO {
  users: User[];
  pagination: {
    limit: number;
    lastKey?: UsersLastKey;
  };
}
