import {
  ListKudosDTO,
  ListKudosOutputDTO,
  CreateKudosDTO,
  CreateKudosOutputDTO,
} from "../dtos";

export interface IKudosRepository {
  list(dto: ListKudosDTO): Promise<ListKudosOutputDTO>;
  create(dto: CreateKudosDTO): Promise<CreateKudosOutputDTO>;
}
