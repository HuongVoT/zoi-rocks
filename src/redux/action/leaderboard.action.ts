import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../di";
import { dtos } from "../../domain";

export const getLeadeboardRockstars = createAsyncThunk(
  "leaderboard/getRockstars",
  async (dto: dtos.ListTopUsersDTO, { rejectWithValue }) => {
    try {
      const rockstars = await userApi.listTopUsers(dto);

      return rockstars;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
