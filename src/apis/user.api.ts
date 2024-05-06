import { AxiosError, AxiosInstance } from "axios";

import { ApiResponse } from "../types";
import { IUserRepository } from "../domain/repositories";
import { ListUsersDTO, ListUsersOutputDTO } from "../domain/dtos";
import { UserApiError } from "../utils";

export class UserApi implements IUserRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly path = "/users",
  ) {}

  async list(dto: ListUsersDTO): Promise<ListUsersOutputDTO> {
    try {
      const response = await this.axios.get(`${this.path}`, {
        params: dto,
      });
      const responseData = response.data as ApiResponse<ListUsersOutputDTO>;

      return responseData.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new UserApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }
}
