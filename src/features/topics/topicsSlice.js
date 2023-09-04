import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },        
    },
    extraReducers: {
        "quizzes/addQuiz": (state, action) => {
          const { topicId, id } = action.payload;
          state.topics[topicId].quizIds.push(id);
        }
      }
    
})

// actions
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
// selector
export const selectTopics = (state) => state.topics.topics;
//reducer
export default topicsSlice.reducer;