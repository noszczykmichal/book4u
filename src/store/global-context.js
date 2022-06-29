import { createContext, useState } from "react";

const GlobalContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBook) => { },
  removeFavorite: (bookId) => { },
  removeAllFavorites: () => { },
  bookIsFavorite: (bookId) => Boolean,
  //Components State
  backdropVisible: false,
  mobileNavVisible: false,
  modalVisible: false,
  //Components Handlers
  closeAllModals: () => Boolean,
  openMobileNav: () => Boolean,
  trashIconOnClick: () => Boolean,
  confirmButtonOnClick: ()=>{},
  cancelButtonOnClick: ()=>Boolean
});

export function GlobalContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  //Components State
  const [isBackdropVisible, setBackdropVisibilty] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibilty] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  function addFavoriteHandler(favoriteBook) {
    setUserFavorites((prevFavoriteBooks) =>
      prevFavoriteBooks.concat(favoriteBook)
    );
  }

  function removeFavoriteHandler(bookId) {
    setUserFavorites(prevState => prevState.filter(book => book.id !== bookId))
  }

  function removeAllFavoritesHandler() {
    setUserFavorites([]);
  }

  function bookIsFavoriteHandler(bookId) {
    return userFavorites.some(book => book.id === bookId);
  }

  // Components Handlers
  function closeAllHandler() {
    setBackdropVisibilty(false);
    setMobileNavVisibilty(false);
    setModalVisibility(false);
  }

  function openMobileNavHandler() {
    setBackdropVisibilty(true);
    setMobileNavVisibilty(true);
  }

  function trashIconOnClickHandler() {
    setMobileNavVisibilty(false);
    setBackdropVisibilty(true);
    setModalVisibility(true);
  }

  function confirmButtonHandler() {
    removeAllFavoritesHandler();
    closeAllHandler();
  }

  function cancelButtonHandler() {
    closeAllHandler();
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    removeAllFavorites: removeAllFavoritesHandler,
    bookIsFavorite: bookIsFavoriteHandler,
    //Components State
    backdropVisible: isBackdropVisible,
    mobileNavVisible: isMobileNavVisible,
    modalVisible: isModalVisible,
    //Components Handlers
    closeAllModals: closeAllHandler,
    openMobileNav: openMobileNavHandler,
    trashIconOnClick: trashIconOnClickHandler,
    confirmButtonOnClick: confirmButtonHandler,
    cancelButtonOnClick: cancelButtonHandler
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
