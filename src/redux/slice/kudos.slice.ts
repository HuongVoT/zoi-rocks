import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { kudosAction } from "../action";
import { models } from "../../domain";
import {
  KudosLastKey,
  ListKudosOutputDTO,
  CreateKudosOutputDTO,
} from "../../domain/dtos";
import { ActionStatus, DefaultParams } from "../../utils";

interface KudosState {
  kudos: models.Kudos[];
  listKudosStatus: ActionStatus;
  createKudosStatus: ActionStatus;
  error: {
    message?: string;
  };
  pagination: {
    limit: number;
    lastKey?: KudosLastKey;
  };
  isLoadingMore: boolean;
}

const initialState: KudosState = {
  kudos: [],
  listKudosStatus: ActionStatus.INIT,
  createKudosStatus: ActionStatus.INIT,
  error: {},
  pagination: {
    limit: DefaultParams.LIST_KUDOS_LIMIT,
  },
  isLoadingMore: false,
};

export const kudosSlice = createSlice({
  name: "kudos",
  initialState,
  reducers: {
    resetKudos: (state) => {
      state.error = {};
      state.createKudosStatus = ActionStatus.INIT;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(kudosAction.listKudos.pending, (state, action) => {
      state.listKudosStatus = ActionStatus.PENDING;
      state.isLoadingMore = action.meta.arg.isLoadingMore;
      state.error = {};
    });
    builder.addCase(
      kudosAction.listKudos.fulfilled,
      (
        state,
        action: PayloadAction<{
          kudos: ListKudosOutputDTO;
          isLoadingMore: boolean;
        }>,
      ) => {
        if (action.payload.isLoadingMore) {
          state.kudos = state.kudos.concat(action.payload.kudos.kudos);
        } else {
          state.kudos = action.payload.kudos.kudos;
        }

        state.listKudosStatus = ActionStatus.SUCCESS;
        state.error = {};
        state.pagination = action.payload.kudos.pagination;
      },
    );
    builder.addCase(kudosAction.listKudos.rejected, (state, action) => {
      state.error = { message: "Something went wrong!" };
      state.listKudosStatus = ActionStatus.ERROR;
      state.error.message = action.payload as string;
    });
    builder.addCase(
      kudosAction.createKudos.fulfilled,
      (state, action: PayloadAction<CreateKudosOutputDTO>) => {
        state.kudos = [action.payload.kudos, ...state.kudos];
        state.createKudosStatus = ActionStatus.SUCCESS;
        state.error = {};
      },
    );
    builder.addCase(kudosAction.createKudos.pending, (state) => {
      state.createKudosStatus = ActionStatus.PENDING;
      state.error = {};
    });
    builder.addCase(kudosAction.createKudos.rejected, (state, action) => {
      state.error = { message: "Fail to give kudos!" };
      state.createKudosStatus = ActionStatus.ERROR;
      state.error.message = action.payload as string;
    });
  },
});

export const selectKudos = (state: RootState) => state.kudos.kudos;
export const kudosReducer = kudosSlice.reducer;
export const { resetKudos } = kudosSlice.actions;
