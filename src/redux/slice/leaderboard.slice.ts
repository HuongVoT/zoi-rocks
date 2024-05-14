import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { leaderboardAction } from "../action";
import { models } from "../../domain";
import { ActionStatus } from "../../utils";

interface LeaderboardState {
  users: models.User[];
  leaderboardStatus: ActionStatus;
  error: {
    message?: string;
  };
}

const initialState: LeaderboardState = {
  users: [],
  leaderboardStatus: ActionStatus.INIT,
  error: {},
};

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      leaderboardAction.getLeadeboardRockstars.pending,
      (state) => {
        state.leaderboardStatus = ActionStatus.PENDING;
        state.error = {};
      },
    );
    builder.addCase(
      leaderboardAction.getLeadeboardRockstars.fulfilled,
      (state, action: PayloadAction<models.User[]>) => {
        state.users = action.payload;
        state.leaderboardStatus = ActionStatus.SUCCESS;
        state.error = {};
      },
    );
    builder.addCase(
      leaderboardAction.getLeadeboardRockstars.rejected,
      (state, action) => {
        state.error = { message: "Something went wrong!" };
        state.leaderboardStatus = ActionStatus.ERROR;
        state.error.message = action.payload as string;
      },
    );
  },
});

export const selectLeaderboard = (state: RootState) => state.leaderboard.users;
export const leaderboardReducer = leaderboardSlice.reducer;
