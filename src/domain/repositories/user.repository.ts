import {
  ListTopUsersDTO,
  ListTopUsersOutputDTO,
  ListUsersDTO,
  ListUsersOutputDTO,
} from "../dtos";
import type { User } from "../models";

export interface IUserRepository {
  list(dto: ListUsersDTO): Promise<ListUsersOutputDTO>;
  listTopUsers(dto: ListTopUsersDTO): Promise<ListTopUsersOutputDTO>;
  findById(id: string): Promise<User | null>;
}
