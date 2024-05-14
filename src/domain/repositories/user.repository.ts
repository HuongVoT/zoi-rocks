import { ListTopUsersDTO, ListUsersDTO, ListUsersOutputDTO } from "../dtos";
import { User } from "../models";

export interface IUserRepository {
  list(dto: ListUsersDTO): Promise<ListUsersOutputDTO>;
  listTopUsers(dto: ListTopUsersDTO): Promise<User[]>;
}
