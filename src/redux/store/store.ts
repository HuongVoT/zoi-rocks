import { configureStore } from "@reduxjs/toolkit";

import { userSlice, kudosSlice } from "../slice";

export const store = configureStore({
  reducer: {
    user: userSlice.userReducer,
    kudos: kudosSlice.kudosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
