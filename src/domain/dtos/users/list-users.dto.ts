import type { User } from "../../models";
export interface ListUsersDTO {
  pageSize: number;
  currentPage: number;
}

export interface ListUsersOutputDTO {
  users: User[];
  pagination: {
    pageSize: number;
    currentPage: number;
    lastEvaluatedKey: string | undefined;
  };
}
