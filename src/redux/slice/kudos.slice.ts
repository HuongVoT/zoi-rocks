import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { kudosAction } from "../action";
import { models } from "../../domain";
import { KudosLastKey, ListKudosOutputDTO } from "../../domain/dtos";
import { ActionStatus } from "../../utils";

interface KudosState {
  kudos: models.Kudos[];
  listKudosStatus: ActionStatus;
  loading: boolean;
  error: {
    message?: string;
  };
  pagination: {
    limit: number;
    lastKey?: KudosLastKey;
  };
}

const initialState: KudosState = {
  kudos: [],
  listKudosStatus: ActionStatus.INIT,
  loading: false,
  error: {},
  pagination: {
    limit: 10,
  },
};

export const kudosSlice = createSlice({
  name: "kudos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      kudosAction.listKudos.fulfilled,
      (state, action: PayloadAction<ListKudosOutputDTO>) => {
        state.kudos = action.payload.kudos;
        state.listKudosStatus = ActionStatus.SUCCESS;
        state.loading = false;
        state.error = {};
        state.pagination = action.payload.pagination;
      },
    );
    builder.addCase(kudosAction.listKudos.pending, (state) => {
      state.loading = true;
      state.listKudosStatus = ActionStatus.PENDING;
      state.error = {};
    });
    builder.addCase(kudosAction.listKudos.rejected, (state, action) => {
      state.error = { message: "Something went wrong!" };
      state.listKudosStatus = ActionStatus.ERROR;
      state.loading = false;
      state.error.message = action.payload as string;
    });
  },
});

export const selectKudos = (state: RootState) => state.kudos.kudos;
export const kudosReducer = kudosSlice.reducer;
