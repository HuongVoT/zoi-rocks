import { createAsyncThunk } from "@reduxjs/toolkit";

import { userApi } from "../../di";
import { ListUsersDTO } from "../../domain/dtos";

export const listUsers = createAsyncThunk(
  "user/list",
  async (dto: ListUsersDTO, { rejectWithValue }) => {
    try {
      const users = await userApi.list(dto);

      return users;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
