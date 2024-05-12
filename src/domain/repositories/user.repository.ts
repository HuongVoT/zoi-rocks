import {
  ListTopUsersDTO,
  ListTopUsersOutputDTO,
  ListUsersDTO,
  ListUsersOutputDTO,
} from "../dtos";

export interface IUserRepository {
  list(dto: ListUsersDTO): Promise<ListUsersOutputDTO>;
  listTopUsers(dto: ListTopUsersDTO): Promise<ListTopUsersOutputDTO>;
}
