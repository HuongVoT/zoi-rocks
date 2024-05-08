import { createAsyncThunk } from "@reduxjs/toolkit";
import { kudosApi } from "../../di";
import { ListKudosDTO } from "../../domain/dtos";

export const listKudos = createAsyncThunk(
  "kudos/list",
  async (dto: ListKudosDTO, { rejectWithValue }) => {
    try {
      const kudos = await kudosApi.list(dto);

      return kudos;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
