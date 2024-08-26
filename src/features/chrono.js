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
  reducers: {
    updateChronoValue: (state, action) => {
      const chosenState = state[action.payload.type];

      if (chosenState.value + action.payload.value === 0) return;

      if (action.payload.type === 'session') {
        if (!state.isPlaying) {
          chosenState.value += action.payload.value;
          chosenState.runningValue += action.payload.value;
          state.displayedValue.value = chosenState.runningValue;
        } else {
          chosenState.value += action.payload.value;
        }
      } else if (action.payload.type === 'pause') {
        chosenState.value += action.payload.value;
      }
    },
  },
});

export const { updateChronoValue } = chrono.actions;
export default chrono.reducer;
