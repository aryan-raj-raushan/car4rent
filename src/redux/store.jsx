import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";

const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
