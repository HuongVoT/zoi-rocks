import { ListKudosDTO, ListKudosOutputDTO } from "../dtos";

export interface IKudosRepository {
  list(dto: ListKudosDTO): Promise<ListKudosOutputDTO>;
}
