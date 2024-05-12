import { AxiosError, AxiosInstance } from "axios";

import {
  ListTopUsersDTO,
  ListTopUsersOutputDTO,
  ListUsersDTO,
  ListUsersOutputDTO,
} from "../domain/dtos";
import { IUserRepository } from "../domain/repositories";
import { ApiResponse } from "../types";
import { UserApiError, LeaderboardApiError } from "../utils";

export class UserApi implements IUserRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async list(dto: ListUsersDTO): Promise<ListUsersOutputDTO> {
    try {
      const response = await this.axios.get("/users", {
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

  async listTopUsers(dto: ListTopUsersDTO): Promise<ListTopUsersOutputDTO> {
    try {
      const response = await this.axios.get("/leaderboard", {
        params: dto,
      });
      const responseData = response.data as ApiResponse<ListTopUsersOutputDTO>;

      return responseData.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new LeaderboardApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }
}
