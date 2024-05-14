import { AxiosError, AxiosInstance } from "axios";
import { IKudosRepository } from "../domain/repositories";
import { dtos, models } from "../domain";
import { KudosApiError } from "../utils";

export class KudosApi implements IKudosRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async list(dto: dtos.ListKudosDTO): Promise<dtos.ListKudosOutputDTO> {
    try {
      const { limit, lastKey, filter } = dto;
      const params = {
        limit,
        lastKey,
        ...filter,
      };

      const response = await this.axios.get("/kudos", {
        params,
      });

      const listKudos = response.data?.data.kudos.map(
        (kudosProps: models.KudosProps) => {
          return new models.Kudos(kudosProps);
        },
      );

      return {
        kudos: listKudos,
        pagination: response.data?.data.pagination,
      } as dtos.ListKudosOutputDTO;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new KudosApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }

  async create(dto: dtos.CreateKudosDTO): Promise<models.Kudos> {
    try {
      const response = await this.axios.post("/kudos", dto, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const kudosProps = response.data?.data as models.KudosProps;
      const kudos = new models.Kudos(kudosProps);

      return kudos;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new KudosApiError(error.response?.data?.error.message);
      }
      throw error;
    }
  }
}
