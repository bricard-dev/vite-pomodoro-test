import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: 'Work',
  },
};

export const chrono = createSlice({
  name: 'chrono',
  initialState,
  reducers: {},
});

export default chrono.reducer;
