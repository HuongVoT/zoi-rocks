import { AxiosError, AxiosInstance } from "axios";
import { ApiResponse } from "../types";
import { IKudosRepository } from "../domain/repositories";
import { ListKudosDTO, ListKudosOutputDTO } from "../domain/dtos";
import { KudosApiError } from "../utils";

export class KudosApi implements IKudosRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly path = "/kudos",
  ) {}

  async list(dto: ListKudosDTO): Promise<ListKudosOutputDTO> {
    try {
      const response = await this.axios.get(`${this.path}`, {
        params: dto,
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
}
