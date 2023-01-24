import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./userInput"
import monthReducer from "./monthInput"

const store = configureStore({
  reducer: {userInput: userInputReducer, month: monthReducer},
});

export default store