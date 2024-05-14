import { createAsyncThunk } from "@reduxjs/toolkit";
import { kudosApi } from "../../di";
import { dtos } from "../../domain";

export const listKudos = createAsyncThunk(
  "kudos/list",
  async (
    payload: { dto: dtos.ListKudosDTO; isLoadingMore: boolean },
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
  async (dto: dtos.CreateKudosDTO, { rejectWithValue }) => {
    try {
      const createdKudos = await kudosApi.create(dto);

      return createdKudos;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
