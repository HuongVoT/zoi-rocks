import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { userAction } from "../action";
import { models } from "../../domain";
import { ListUsersOutputDTO } from "../../domain/dtos";
import { ActionStatus } from "../../utils";

interface UserState {
  users: models.User[];
  listUsersStatus: ActionStatus;
  error: {
    message?: string;
  };
  pagination: {
    limit: number;
    lastKey?: string;
  };
}

const initialState: UserState = {
  users: [],
  listUsersStatus: ActionStatus.INIT,
  error: {},
  pagination: {
    limit: 5,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userAction.listUsers.pending, (state) => {
      state.listUsersStatus = ActionStatus.PENDING;
      state.error = {};
    });
    builder.addCase(
      userAction.listUsers.fulfilled,
      (state, action: PayloadAction<ListUsersOutputDTO>) => {
        state.users = action.payload.users;
        state.listUsersStatus = ActionStatus.SUCCESS;
        state.error = {};
        state.pagination = action.payload.pagination;
      },
    );
    builder.addCase(userAction.listUsers.rejected, (state, action) => {
      state.error = { message: "Something went wrong!" };
      state.listUsersStatus = ActionStatus.ERROR;
      state.error.message = action.payload as string;
    });
  },
});

export const selectUsers = (state: RootState) => state.user.users;
export const userReducer = userSlice.reducer;
