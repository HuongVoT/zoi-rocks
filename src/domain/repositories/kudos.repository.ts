import { CreateKudosDTO, ListKudosDTO, ListKudosOutputDTO } from "../dtos";
import { Kudos } from "../models";

export interface IKudosRepository {
  list(dto: ListKudosDTO): Promise<ListKudosOutputDTO>;
  create(dto: CreateKudosDTO): Promise<Kudos>;
}
