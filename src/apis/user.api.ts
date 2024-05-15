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

  async listTopUsers(dto: dtos.ListTopUsersDTO): Promise<models.User[]> {
    try {
      const response = await this.axios.get("/leaderboard", {
        params: dto,
      });

      const users = response.data?.data.users.map(
        (userProps: models.UserProps) => {
          return new models.User(userProps);
        },
      );

      return users;
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
