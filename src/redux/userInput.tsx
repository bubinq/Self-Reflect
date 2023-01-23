import { createSlice } from "@reduxjs/toolkit";

const userInputSlice = createSlice({
  name: "userInput",
  initialState: {
    sleepQuality: "10",
    mood: "10",
    physicalForm: "10",
    mentalForm: "10",
    financialStatus: "10",
    hasFinancialPlan: "neutral",
    financialProgress: "10",
    skillDedication: "15 minutes",
    socialLifeQuality: "10",
    socialSkills: "10",
    goingOut: "every other day",
  },
  reducers: {
    setSleepQuality: (state, actions) => {
      state.sleepQuality = actions.payload;
    },
    setMood: (state, actions) => {
      state.mood = actions.payload;
    },
    setPhysicalForm: (state, actions) => {
      state.physicalForm = actions.payload;
    },
    setMentalForm: (state, actions) => {
      state.mentalForm = actions.payload;
    },
    setFinancialStatus: (state, actions) => {
      state.financialStatus = actions.payload;
    },
    setHasFinancialPlan: (state, actions) => {
      state.hasFinancialPlan = actions.payload;
    },
    setFinancialProgress: (state, actions) => {
      state.financialProgress = actions.payload;
    },
    setSkillDedication: (state, actions) => {
      state.skillDedication = actions.payload;
    },
    setSocialLifeQuality: (state, actions) => {
      state.socialLifeQuality = actions.payload;
    },
    setSocialSkills: (state, actions) => {
      state.socialSkills = actions.payload;
    },
    setGoingOutFreq: (state, actions) => {
      state.goingOut = actions.payload;
    },
  },
});

export const {
  setSleepQuality,
  setMood,
  setPhysicalForm,
  setMentalForm,
  setFinancialStatus,
  setHasFinancialPlan,
  setFinancialProgress,
  setSkillDedication,
  setSocialLifeQuality,
  setSocialSkills,
  setGoingOutFreq,
} = userInputSlice.actions;

export default userInputSlice.reducer