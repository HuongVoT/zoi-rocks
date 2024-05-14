import type { Kudos } from "../../models";

export interface KudosFilter {
  category?: string;
  startDate?: string;
  endDate?: string;
  sender?: string;
  receiver?: string;
}

export interface ListKudosDTO {
  limit: number;
  lastKey?: string;
  filter?: KudosFilter;
}

export interface ListKudosOutputDTO {
  kudos: Kudos[];
  pagination: {
    limit: number;
    lastKey?: string;
  };
}
