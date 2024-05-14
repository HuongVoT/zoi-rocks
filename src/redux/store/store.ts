import { configureStore } from "@reduxjs/toolkit";

import { userSlice, kudosSlice, leaderboardSlice } from "../slice";

export const store = configureStore({
  reducer: {
    user: userSlice.userReducer,
    kudos: kudosSlice.kudosReducer,
    leaderboard: leaderboardSlice.leaderboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
