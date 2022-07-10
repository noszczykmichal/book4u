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
  findBookFormVisible: false,
  toggleBarHeight: 0,
  formHeight: 0,
  //Components Handlers
  closeAllModals: () => Boolean,
  openMobileNav: () => Boolean,
  trashIconOnClick: () => Boolean,
  confirmButtonOnClick: () => { },
  cancelButtonOnClick: () => Boolean,
  takeToTopPaginationArrows: () => null,
  takeToTopButton: () => null,
  findBookFormVisibilitySetter: () => Boolean,
  toggleBarHeightSetter: () => Number,
  formHeightSetter: () => Number,
});

export function GlobalContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  //Components State
  const [isBackdropVisible, setBackdropVisibilty] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibilty] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isFindBookFormVisible, setFindBookFormVisibility] = useState(false);
  const [toggleBarCurrentHeight, setToggleBarCurrentHeight] = useState(0);
  const [formCurrentHeight, setFormCurrentHeight] = useState(0);

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

  function takeToTopPaginationArrowsHandler() {
    const booklistTop = document.getElementById('book-list');
    if (booklistTop) {
      const position = booklistTop.offsetTop - 240;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      })
    }
  }

  function takeToTopButtonHandler() {
    const booklistTop = document.getElementById('book-list');
    if (booklistTop) {
      const position = booklistTop.offsetTop - 80;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      })
    }
  }

  function findBookFormVisibilityHandler() {
    setFindBookFormVisibility(prevState => !prevState);
  }

  function toggleBarHeightHandler(referenceObj) {
    setToggleBarCurrentHeight(referenceObj.current.clientHeight);
  }

  function formHeightHandler(referenceObj) {
    setFormCurrentHeight(referenceObj.current.clientHeight);
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
    findBookFormVisible: isFindBookFormVisible,
    toggleBarHeight: toggleBarCurrentHeight,
    formHeight: formCurrentHeight,
    //Components Handlers
    closeAllModals: closeAllHandler,
    openMobileNav: openMobileNavHandler,
    trashIconOnClick: trashIconOnClickHandler,
    confirmButtonOnClick: confirmButtonHandler,
    cancelButtonOnClick: cancelButtonHandler,
    takeToTopPaginationArrows: takeToTopPaginationArrowsHandler,
    takeToTopButton: takeToTopButtonHandler,
    findBookFormVisibilitySetter: findBookFormVisibilityHandler,
    toggleBarHeightSetter: toggleBarHeightHandler,
    formHeightSetter: formHeightHandler,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
