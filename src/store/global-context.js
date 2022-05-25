import { createContext, useState } from "react";

const GlobalContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBook) => {},
  removeFavorite: (bookId)=>{},
  bookIsFavorite: (bookId)=>Boolean,
});

export function GlobalContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteBook) {
    setUserFavorites((prevFavoriteBooks) =>
      prevFavoriteBooks.concat(favoriteBook)
    );
  }

  function removeFavoriteHandler(bookId){
    setUserFavorites(prevState=> prevState.filter(book=> book.id!==bookId))
  }

  function bookIsFavoriteHandler(bookId){
    return userFavorites.some(book => book.id===bookId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    bookIsFavorite: bookIsFavoriteHandler,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
