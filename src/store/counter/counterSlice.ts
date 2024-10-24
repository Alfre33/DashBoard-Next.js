import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    initCounterState(state, action: PayloadAction<number>) {
      if ( state.isReady ) return;
      
      state.count = action.payload;
      state.isReady = true;
    },
    resetCount( state, action: PayloadAction<number> ) {
      if ( action.payload < 0 ) action.payload = 0;

      state.count = action.payload;

    }
  },
});

export const {increment,decrement,initCounterState,resetCount} = counterSlice.actions;

export default counterSlice.reducer;
