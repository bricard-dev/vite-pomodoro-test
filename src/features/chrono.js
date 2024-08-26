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
    tick: (state, action) => {
      console.log('TICK');
    },
    setUpChrono: (state, action) => {
      state.isPlaying = true;
      state.intervalID = action.payload;
    },
    resetChrono: (state, action) => {
      state.isPlaying = false;
      window.clearInterval(state.intervalID);
    },
  },
});

export function startChrono(action) {
  return function (dispatch, getState) {
    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(setUpChrono(intervalID));
    dispatch(tick());
  };
}

export const { updateChronoValue, setUpChrono, resetChrono, tick } =
  chrono.actions;
export default chrono.reducer;
