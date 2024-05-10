import type { Kudos } from "../../models";

export interface KudosLastKey {
  PK: string;
  SK: string;
  "KEY-1"?: string;
  "KEY-2"?: string;
  "KEY-3"?: string;
}

export interface KudosFilter {
  category?: string;
  startDate?: string;
  endDate?: string;
  sender?: string;
  receiver?: string;
}

export interface ListKudosDTO {
  limit: number;
  lastKey?: KudosLastKey;
  filter?: KudosFilter;
}

export interface ListKudosOutputDTO {
  kudos: Kudos[];
  pagination: {
    limit: number;
    lastKey?: KudosLastKey;
  };
}
