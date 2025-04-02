import { createSlice } from "@reduxjs/toolkit";

import { Book } from "@/utils/types";

interface BooksState {
  favorites: Book[];
}

const booksInitialState: BooksState = {
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
