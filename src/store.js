import { configureStore } from '@reduxjs/toolkit';
import chrono from './features/chrono';

export default configureStore({
  reducer: {
    chrono,
  },
});
