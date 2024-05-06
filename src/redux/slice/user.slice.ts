import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { userAction } from "../action";
import { models } from "../../domain";
import { ListUsersOutputDTO } from "../../domain/dtos";

export enum UserActionStatus {
  INIT = "INIT",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface UserState {
  users: models.User[];
  listUsersStatus: UserActionStatus;
  loading: boolean;
  error: {
    message?: string;
  };
  pagination: {
    pageSize: number;
    currentPage: number;
    lastEvaluatedKey: string | undefined;
  };
}

const initialState: UserState = {
  users: [],
  listUsersStatus: UserActionStatus.INIT,
  loading: false,
  error: {},
  pagination: {
    pageSize: 5,
    currentPage: 1,
    lastEvaluatedKey: undefined,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userAction.listUsers.fulfilled,
      (state, action: PayloadAction<ListUsersOutputDTO>) => {
        state.users = action.payload.users;
        state.listUsersStatus = UserActionStatus.SUCCESS;
        state.loading = false;
        state.error = {};
        state.pagination = action.payload.pagination;
      },
    );
    builder.addCase(userAction.listUsers.pending, (state) => {
      state.loading = true;
      state.listUsersStatus = UserActionStatus.PENDING;
      state.error = {};
    });
    builder.addCase(userAction.listUsers.rejected, (state, action) => {
      state.error = { message: "Something went wrong!" };
      state.listUsersStatus = UserActionStatus.ERROR;
      state.loading = false;
      state.error.message = action.payload as string;
    });
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const userReducer = userSlice.reducer;
