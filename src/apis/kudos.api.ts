import { AxiosError, AxiosInstance } from "axios";
import { ApiResponse } from "../types";
import { IKudosRepository } from "../domain/repositories";
import {
  ListKudosDTO,
  ListKudosOutputDTO,
  CreateKudosDTO,
  CreateKudosOutputDTO,
} from "../domain/dtos";
import { KudosApiError } from "../utils";

export class KudosApi implements IKudosRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async list(dto: ListKudosDTO): Promise<ListKudosOutputDTO> {
    try {
      const { limit, lastKey, filter } = dto;
      const params = new URLSearchParams({
        limit: limit.toString(),
        lastKey: lastKey ? JSON.stringify(lastKey) : "",
        ...filter,
      });
      const response = await this.axios.get("/kudos", {
        params,
      });
      const responseData = response.data as ApiResponse<ListKudosOutputDTO>;

      return responseData.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new KudosApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }

  async create(dto: CreateKudosDTO): Promise<CreateKudosOutputDTO> {
    try {
      const response = await this.axios.post("/kudos", dto, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = response.data as ApiResponse<CreateKudosOutputDTO>;

      return responseData.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new KudosApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }
}
