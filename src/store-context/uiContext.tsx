/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */

import {
  createContext,
  useState,
  FC,
  ReactNode,
  RefObject,
  FormEvent,
} from "react";
import {
  ContextPropsAndMethods,
  ElementHeightType,
  // PaginationDirection,
  TakeToTopAgent,
  SearchFormObj,
} from "../utils/types";

const UIContext = createContext({
  displayedPage: 1,
  setDisplayedPage: (_number: number) => {},
  displayedPageChangeHandler: (
    _param: number | ((prevState: number) => number),
  ) => {},
  totalBooksAvail: 0,
  setTotalBooksAvailable: (_number: number) => {},
  // Components State
  isBackdropVisible: false,
  isMobileNavVisible: false,
  isModalVisible: false,
  isFindBookFormVisible: false,
  toggleBarCurrentHeight: 0,
  formCurrentHeight: 0,
  searchFormValues: {} as Partial<SearchFormObj>,
  paginationValue: 1,
  // Components Handlers
  onCloseAllModals: () => {},
  onMobileNavOpen: () => {},
  onTrashIconOnClick: () => {},
  onTakeToTopClick: (_id: TakeToTopAgent) => {},
  setFindBookFormVisibilityHandler: () => {},
  setElementHeight: (
    _elementName: ElementHeightType,
    _referenceObj: RefObject<HTMLElement | null>,
  ) => {},
  updateInputValues: (_event: FormEvent) => {},
  clearInputValues: () => {},
  setPaginatedPageValue: (_val: number) => {},
});

interface UIContextProviderProps {
  children: ReactNode;
  value?: ContextPropsAndMethods;
}

export const UIContextProvider: FC<UIContextProviderProps> = ({ children }) => {
  const [displayedPage, setDisplayedPage] = useState(1);
  const [totalBooksAvail, setTotalBooksAvailable] = useState(0);
  // Components State
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const [isMobileNavVisible, setMobileNavVisibility] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isFindBookFormVisible, setFindBookFormVisibility] = useState(false);
  const [toggleBarCurrentHeight, setToggleBarCurrentHeight] = useState(0);
  const [formCurrentHeight, setFormCurrentHeight] = useState(0);
  const [searchFormValues, setSearchFormValues] = useState<
    Partial<SearchFormObj>
  >({});
  const [paginationValue, setPaginationValue] = useState(1);

  function displayedPageChangeHandler(
    param: number | ((prevState: number) => number),
  ) {
    setDisplayedPage(param);
    setPaginationValue(param);
  }

  // Components Handlers
  function onCloseAllModals() {
    setIsBackdropVisible(false);
    setMobileNavVisibility(false);
    setModalVisibility(false);
  }

  function onMobileNavOpen() {
    setIsBackdropVisible(true);
    setMobileNavVisibility(true);
  }

  function onTrashIconOnClick() {
    setMobileNavVisibility(false);
    setIsBackdropVisible(true);
    setModalVisibility(true);
  }

  function onTakeToTopClick(idOfAgent: TakeToTopAgent) {
    const pixelsToSubtract = idOfAgent === "button" ? 80 : 240;
    const bookListTop = document.getElementById("book-list");
    if (bookListTop) {
      const position = bookListTop.offsetTop - pixelsToSubtract;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  }

  function setFindBookFormVisibilityHandler() {
    setFindBookFormVisibility((prevState) => !prevState);
  }

  function setElementHeight(
    elementName: ElementHeightType,
    referenceObj: RefObject<HTMLElement | null>,
  ) {
    if (elementName === "toggleBar") {
      setToggleBarCurrentHeight(referenceObj!.current!.clientHeight);
    } else {
      setFormCurrentHeight(referenceObj!.current!.clientHeight);
    }
  }

  function updateInputValues(event: FormEvent) {
    const { name, value } = event.target as HTMLInputElement;
    console.log(name);
    setSearchFormValues((prevInputValuesObj) => ({
      ...prevInputValuesObj,
      [name]: value,
    }));
  }

  function clearInputValues() {
    setSearchFormValues({});
  }

  function setPaginatedPageValue(val: number) {
    setPaginationValue(val);
  }

  const context = {
    displayedPage,
    setDisplayedPage,
    displayedPageChangeHandler,
    totalBooksAvail,
    setTotalBooksAvailable,
    // Components State
    isBackdropVisible,
    isMobileNavVisible,
    isModalVisible,
    isFindBookFormVisible,
    toggleBarCurrentHeight,
    formCurrentHeight,
    searchFormValues,
    paginationValue,
    // Components Handlers
    onCloseAllModals,
    onMobileNavOpen,
    onTrashIconOnClick,
    onTakeToTopClick,
    setFindBookFormVisibilityHandler,
    setElementHeight,
    updateInputValues,
    clearInputValues,
    setPaginatedPageValue,
  };

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
};

export default UIContext;
