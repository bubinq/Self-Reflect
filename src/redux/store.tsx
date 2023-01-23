import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./userInput"

const store = configureStore({
  reducer: {userInput: userInputReducer},
});

export default store