import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../ActionSlices/sideBarSlice';

const store = configureStore({
  reducer: {
    sidebar: toggleReducer,  // Changed from 'toggle' to 'sidebar'
  },
});

export default store;
