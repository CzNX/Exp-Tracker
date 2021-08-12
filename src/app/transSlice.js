import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trans: [
    { id: 1, text: "apple", amount: 700 },
    { id: 2, text: "ball", amount: -200 },
    { id: 3, text: "cat", amount: -30 },
    { id: 4, text: "dog", amount: -400 },
  ],
};

export const transSlice = createSlice({
  name: "trans",
  initialState,
  reducers: {
    del: (state, action) => {
      // state.trans.pop(action.payload)
      //  return state.trans.filter(i=>i.id!==action.payload)
      return {
        ...state,
        trans: state.trans.filter((i) => i.id !== action.payload),
      };
    },
    add: (state, action) => {
      state.trans.push(action.payload);
    },
    hydrate: (state, action) => {
      // do not do state = action.payload it will not update the store
      return action.payload;
    },
  },
});

export const { del, add, hydrate } = transSlice.actions;

export const selectTrans = (state) => state.trans.trans;

export default transSlice.reducer;
