/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { createContext, useState } from "react";

const UIContext = createContext({
  favorites: [],
  totalFavorites: 0,
  loadFavsFromLocStorage: () => {},
  addFavorite: (_favoriteBook) => {},
  removeFavorite: (_bookId) => {},
  removeAllFavorites: () => {},
  bookIsFavorite: (_bookId) => Boolean,
  displayedPage: 1,
  changeDisplayedPage: (_number) => Number,
  totalBooksAvail: 0,
  changeNumbOfBooksAvail: (_number) => Number,
  // Components State
  backdropVisible: false,
  mobileNavVisible: false,
  modalVisible: false,
  findBookFormVisible: false,
  toggleBarHeight: 0,
  formHeight: 0,
  inputStoredValueObj: {},
  paginationValue: 1,
  // Components Handlers
  closeAllModals: () => Boolean,
  openMobileNav: () => Boolean,
  trashIconOnClick: () => Boolean,
  actionButtonOnClick: () => Boolean,
  takeToTop: () => null,
  findBookFormVisibilitySetter: () => Boolean,
  elementHeightSetter: () => Number,
  inputValueSetter: () => Object,
  clearInputValues: () => Object,
  inputPaginationSetter: (_number) => Number,
});

export function UIContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksAvailable, setBooksAvailable] = useState(0);
  // Components State
  const [isBackdropVisible, setBackdropVisibility] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isFindBookFormVisible, setFindBookFormVisibility] = useState(false);
  const [toggleBarCurrentHeight, setToggleBarCurrentHeight] = useState(0);
  const [formCurrentHeight, setFormCurrentHeight] = useState(0);
  const [inputValueObj, setInputValueObj] = useState({});
  const [paginationCurrentVal, setPaginationCurrentVal] = useState(1);

  function loadFavsFromLocStorageHandler() {
    const data = localStorage.getItem("FavBooks");
    if (data) {
      const savedFavorites = JSON.parse(data);
      setUserFavorites(savedFavorites);
    }
  }

  function addFavoriteHandler(favoriteBook) {
    setUserFavorites((prevState) => {
      const updatedFavs = prevState.concat(favoriteBook);
      localStorage.setItem("FavBooks", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
  }

  function removeFavoriteHandler(bookId) {
    setUserFavorites((prevState) => {
      const updatedFavs = prevState.filter((book) => book.id !== bookId);
      localStorage.setItem("FavBooks", JSON.stringify(updatedFavs));
      return updatedFavs;
    });
  }

  function removeAllFavoritesHandler() {
    setUserFavorites([]);
    localStorage.clear();
  }

  function bookIsFavoriteHandler(bookId) {
    return userFavorites.some((book) => book.id === bookId);
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

  function actionButtonOnClickHandler(id) {
    if (id === "confirm") {
      removeAllFavoritesHandler();
      closeAllHandler();
    } else {
      closeAllHandler();
    }
  }

  function takeToTopHandler(idOfAgent) {
    const pixelsToSubtract = idOfAgent === "button" ? 80 : 240;
    const booklistTop = document.getElementById("book-list");
    if (booklistTop) {
      const position = booklistTop.offsetTop - pixelsToSubtract;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }

  function findBookFormVisibilityHandler() {
    setFindBookFormVisibility((prevState) => !prevState);
  }

  function elementHeightHandler(elementName, referenceObj) {
    if (elementName === "toggleBar") {
      setToggleBarCurrentHeight(referenceObj.current.clientHeight);
    } else {
      setFormCurrentHeight(referenceObj.current.clientHeight);
    }
  }

  function inputValueHandler(event) {
    const { name, value } = event.target;

    setInputValueObj((prevInputValuesObj) => ({
      ...prevInputValuesObj,
      [name]: value,
    }));
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
    loadFavsFromLocStorage: loadFavsFromLocStorageHandler,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    removeAllFavorites: removeAllFavoritesHandler,
    bookIsFavorite: bookIsFavoriteHandler,
    displayedPage: currentPage,
    changeDisplayedPage: displayedPageHandler,
    totalBooksAvail: booksAvailable,
    changeNumbOfBooksAvail: changeNumbOfBooksAvailHandler,
    // Components State
    backdropVisible: isBackdropVisible,
    mobileNavVisible: isMobileNavVisible,
    modalVisible: isModalVisible,
    findBookFormVisible: isFindBookFormVisible,
    toggleBarHeight: toggleBarCurrentHeight,
    formHeight: formCurrentHeight,
    inputStoredValueObj: inputValueObj,
    paginationValue: paginationCurrentVal,
    // Components Handlers
    closeAllModals: closeAllHandler,
    openMobileNav: openMobileNavHandler,
    trashIconOnClick: trashIconOnClickHandler,
    actionButtonOnClick: actionButtonOnClickHandler,
    takeToTop: takeToTopHandler,
    findBookFormVisibilitySetter: findBookFormVisibilityHandler,
    elementHeightSetter: elementHeightHandler,
    inputValueSetter: inputValueHandler,
    clearInputValues: clearInputValuesHandler,
    inputPaginationSetter: inputPaginationHandler,
  };

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
}

UIContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIContext;
