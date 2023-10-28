import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  robots: [],
  searchField: '',
};

const searchRobotsSlice = createSlice({
  name: 'searchRobots',
  initialState,
  reducers: {
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
    setRobots: (state, action) => {
      state.robots = action.payload;
    },
  },
});

export const { setSearchField, setRobots } = searchRobotsSlice.actions;

export default searchRobotsSlice.reducer;
