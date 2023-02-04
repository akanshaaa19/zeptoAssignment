import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { editImage: false, editText: false },
  reducers: {
    toggleEditImage(state, action) {
      state.editImage = action.payload;
      console.log(state.editImage);
    },
    toggleEditText(state, action) {
      state.editText = action.payload;
      console.log(state.editImage);
    },
  },
});

const progressSlice = createSlice({
  name: "progress",
  initialState: { step1: false, step2: false, step3: false, step4: false },
  reducers: {
    setStep(state, action) {
      if (action.payload === 1) {
        state.step1 = !state.step1;
      }
      if (action.payload === 2) {
        if (state.step1) {
          state.step2 = !state.step2;
        }
      }
      if (action.payload === 3) {
        if ((state.step1 && state.step2)===true) {
          state.step3 = !state.step3;
        }
      }
      if (action.payload === 4) {
        if ((state.step1 && state.step2 && state.step3)===true) {
          state.step4 = !state.step4;
        }
      }
    },
  },
});

const store = configureStore({
  reducer: { ui: uiSlice.reducer, progress: progressSlice.reducer },
});

export const uiActions = uiSlice.actions;
export const progressActions = progressSlice.actions;

export default store;
