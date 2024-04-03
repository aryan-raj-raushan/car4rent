import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./flightSlice";

const store = configureStore({
  reducer: {
    flight: flightSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
