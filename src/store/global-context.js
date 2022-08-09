import { createContext, useState } from "react";

const GlobalContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBook) => { },
  removeFavorite: (bookId) => { },
  removeAllFavorites: () => { },
  bookIsFavorite: (bookId) => Boolean,
  displayedPage: 1,
  changeDisplayedPage: (number) => Number,
  totalBooksAvail: 0,
  changeNumbOfBooksAvail: (number) => Number,
  //Components State
  backdropVisible: false,
  mobileNavVisible: false,
  modalVisible: false,
  findBookFormVisible: false,
  toggleBarHeight: 0,
  formHeight: 0,
  inputStoredValueObj: {},
  paginationValue: 1,
  //Components Handlers
  closeAllModals: () => Boolean,
  openMobileNav: () => Boolean,
  trashIconOnClick: () => Boolean,
  confirmButtonOnClick: () => { },
  cancelButtonOnClick: () => Boolean,
  takeToTop: () => null,
  findBookFormVisibilitySetter: () => Boolean,
  toggleBarHeightSetter: () => Number,
  formHeightSetter: () => Number,
  inputValueSetter: () => Object,
  clearInputValues: () => Object,
  inputPaginationSetter: (number) => Number
});

export function GlobalContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksAvailable, setBooksAvailable] = useState(0);
  //Components State
  const [isBackdropVisible, setBackdropVisibility] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isFindBookFormVisible, setFindBookFormVisibility] = useState(false);
  const [toggleBarCurrentHeight, setToggleBarCurrentHeight] = useState(0);
  const [formCurrentHeight, setFormCurrentHeight] = useState(0);
  const [inputValueObj, setInputValueObj] = useState({});
  const [paginationCurrentVal, setPaginationCurrentVal] = useState(1);

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

  function displayedPageHandler(number) {
    setCurrentPage(number);
    setPaginationCurrentVal(number);
  }

  function changeNumbOfBooksAvailHandler(number) {
    setBooksAvailable(number);
  }

  // Components Handlers
  function closeAllHandler() {
    setBackdropVisibility(false);
    setMobileNavVisibility(false);
    setModalVisibility(false);
  }

  function openMobileNavHandler() {
    setBackdropVisibility(true);
    setMobileNavVisibility(true);
  }

  function trashIconOnClickHandler() {
    setMobileNavVisibility(false);
    setBackdropVisibility(true);
    setModalVisibility(true);
  }

  function confirmButtonHandler() {
    removeAllFavoritesHandler();
    closeAllHandler();
  }

  function cancelButtonHandler() {
    closeAllHandler();
  }

  function takeToTopHandler(idOfAgent) {
    const pixelsToSubtract = idOfAgent === 'button' ? 80 : 240;
    const booklistTop = document.getElementById('book-list');
    if (booklistTop) {
      const position = booklistTop.offsetTop - pixelsToSubtract;

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

  function inputValueHandler(event) {
    const { name, value } = event.target;

    setInputValueObj(prevInputValuesObj => ({
      ...prevInputValuesObj,
      [name]: value
    }))
  }

  function clearInputValuesHandler() {
    setInputValueObj({});
  }

  function inputPaginationHandler(number) {
    setPaginationCurrentVal(number);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    removeAllFavorites: removeAllFavoritesHandler,
    bookIsFavorite: bookIsFavoriteHandler,
    displayedPage: currentPage,
    changeDisplayedPage: displayedPageHandler,
    totalBooksAvail: booksAvailable,
    changeNumbOfBooksAvail: changeNumbOfBooksAvailHandler,
    //Components State
    backdropVisible: isBackdropVisible,
    mobileNavVisible: isMobileNavVisible,
    modalVisible: isModalVisible,
    findBookFormVisible: isFindBookFormVisible,
    toggleBarHeight: toggleBarCurrentHeight,
    formHeight: formCurrentHeight,
    inputStoredValueObj: inputValueObj,
    paginationValue: paginationCurrentVal,
    //Components Handlers
    closeAllModals: closeAllHandler,
    openMobileNav: openMobileNavHandler,
    trashIconOnClick: trashIconOnClickHandler,
    confirmButtonOnClick: confirmButtonHandler,
    cancelButtonOnClick: cancelButtonHandler,
    takeToTop: takeToTopHandler,
    findBookFormVisibilitySetter: findBookFormVisibilityHandler,
    toggleBarHeightSetter: toggleBarHeightHandler,
    formHeightSetter: formHeightHandler,
    inputValueSetter: inputValueHandler,
    clearInputValues: clearInputValuesHandler,
    inputPaginationSetter: inputPaginationHandler
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
