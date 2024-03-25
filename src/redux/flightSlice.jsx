import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    flightData(state, action) {
      state.flights = action.payload;
    },
  },
});

export const { flightData } = flightSlice.actions;

export default flightSlice.reducer;
