import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

// actions
export const { addQuiz } = quizzesSlice.actions;
// selector
export const selectQuizzes = (state) => state.quizzes.quizzes;
// reducer
export default quizzesSlice.reducer;
