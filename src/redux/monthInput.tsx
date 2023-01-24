import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const month = createSlice({
  name: "month",
  initialState: {
    currMonth: dayjs().month(),
  },
  reducers: {
    nextMonth: (state) => {
      state.currMonth += 1;
    },
    prevMonth: (state) => {
      state.currMonth -= 1;
    },
  },
});

export const {
  nextMonth,
  prevMonth,
} = month.actions;

export default month.reducer