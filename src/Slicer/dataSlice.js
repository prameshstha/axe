import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  postsPerPage: 10,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
    setPostsPerPage: (state, actions) => {
      state.postsPerPage = actions.payload;
    },
  },
});

export const { nextPage, previousPage, setCurrentPage, setPostsPerPage } =
  dataSlice.actions;

export default dataSlice.reducer;
