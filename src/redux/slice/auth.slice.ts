import { createSlice } from "@reduxjs/toolkit";
import { ActionStatus } from "../../utils";

interface AuthState {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string | null;
    totalReceives: number;
    totalSends: number;
  } | null;
  getUserStatus: ActionStatus;
  error: {
    message?: string;
  };
}

const initialState: AuthState = {
  user: null,
  getUserStatus: ActionStatus.INIT,
  error: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const authReducer = authSlice.reducer;
