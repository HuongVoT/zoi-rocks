import { ListUsersDTO, ListUsersOutputDTO } from "../dtos";

export interface IUserRepository {
  list(dto: ListUsersDTO): Promise<ListUsersOutputDTO>;
}
