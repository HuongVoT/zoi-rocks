import { createAsyncThunk } from "@reduxjs/toolkit";
import { kudosApi } from "../../di";
import { CreateKudosDTO, ListKudosDTO } from "../../domain/dtos";

export const listKudos = createAsyncThunk(
  "kudos/list",
  async (
    payload: { dto: ListKudosDTO; isLoadingMore: boolean },
    { rejectWithValue },
  ) => {
    try {
      const kudos = await kudosApi.list(payload.dto);

      return {
        kudos,
        isLoadingMore: payload.isLoadingMore,
      };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const createKudos = createAsyncThunk(
  "kudos/create",
  async (dto: CreateKudosDTO, { rejectWithValue }) => {
    try {
      const kudos = await kudosApi.create(dto);

      return kudos;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
