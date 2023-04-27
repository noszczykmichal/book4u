import { createSlice } from "@reduxjs/toolkit";

const booksInitialState = {
  favorites: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState: booksInitialState,
  reducers: {
    addToUserFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const updatedFavs = state.favorites.filter(
        (book) => book.id !== action.payload,
      );

      return { ...state, favorites: updatedFavs };
    },
    clearFavorites(state) {
      return {
        ...state,
        favorites: [],
      };
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
