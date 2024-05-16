import { AxiosError, AxiosInstance } from "axios";

import { dtos, models } from "../domain";
import { IUserRepository } from "../domain/repositories";
import { UserApiError } from "../utils";

export class UserApi implements IUserRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async list(dto: dtos.ListUsersDTO): Promise<dtos.ListUsersOutputDTO> {
    try {
      const response = await this.axios.get("/users", {
        params: dto,
      });

      const users = response.data?.data.users.map(
        (userProps: models.UserProps) => {
          return new models.User(userProps);
        },
      );

      return {
        users,
        pagination: response.data?.data.pagination,
      } as dtos.ListUsersOutputDTO;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new UserApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }

  async listTopUsers(
    dto: dtos.ListTopUsersDTO,
  ): Promise<dtos.ListTopUsersOutputDTO> {
    try {
      const response = await this.axios.get("/leaderboard", {
        params: dto,
      });

      const topTenUsers = response.data?.data.users.map(
        (userProps: models.LeaderboardUserProps) => {
          return new models.LeaderboardUser(userProps);
        },
      );

      const currentUser = response.data?.data.currentUser
        ? new models.LeaderboardUser(response.data?.data.currentUser)
        : undefined;

      return {
        topTenUsers,
        currentUser,
        currentUserRank: response.data?.data.currentUserRank,
      } as dtos.ListTopUsersOutputDTO;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new UserApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }

  async findById(id: string): Promise<models.User | null> {
    try {
      const response = await this.axios.get(`/users/${id}`);

      if (!response.data?.data) {
        return null;
      }

      const user = new models.User(response.data?.data);
      return user;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new UserApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }
}
