import { configureStore } from "@reduxjs/toolkit";
import mediaplayerReducer from "~/features/mediaplayerSlice";
import { apiSlice } from "~/features/apiSlice";

export const store = configureStore({
  reducer: {
    mediaplayer: mediaplayerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
