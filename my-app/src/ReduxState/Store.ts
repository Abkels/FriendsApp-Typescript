import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchRobotsReducer from './searchRobotsSlice';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    searchRobots: searchRobotsReducer,
    // Add other reducers if you have them
  },
  middleware,
});
