import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { leaderboardAction } from "../action";
import { models, dtos } from "../../domain";
import { ActionStatus } from "../../utils";

interface LeaderboardState {
  topTenUsers: models.LeaderboardUser[];
  currentUser: models.LeaderboardUser | undefined;
  currentUserRank: {
    isInTopTen: boolean;
    userRank: number;
  };
  leaderboardStatus: ActionStatus;
  error: {
    message?: string;
  };
}

const initialState: LeaderboardState = {
  topTenUsers: [],
  currentUser: undefined,
  currentUserRank: {
    isInTopTen: false,
    userRank: 0,
  },
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
      (state, action: PayloadAction<dtos.ListTopUsersOutputDTO>) => {
        state.topTenUsers = action.payload.topTenUsers;
        state.currentUser = action.payload.currentUser;
        state.currentUserRank = {
          isInTopTen: action.payload.currentUserRank.isInTopTen,
          userRank: action.payload.currentUserRank.userRank,
        };
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

export const selectLeaderboard = (state: RootState) =>
  state.leaderboard.topTenUsers;

export const selectCurrentUser = (state: RootState) =>
  state.leaderboard.currentUser;

export const selectIsInTopTen = (state: RootState) =>
  state.leaderboard.currentUserRank.isInTopTen;

export const selectUserRank = (state: RootState) =>
  state.leaderboard.currentUserRank.userRank;

export const leaderboardReducer = leaderboardSlice.reducer;
