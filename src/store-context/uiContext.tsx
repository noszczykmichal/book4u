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
  TakeToTopAgent,
  SearchFormObj,
} from "../utils/types";

const UIContext = createContext({
  displayedPage: 1,
  setDisplayedPage: (_param: number | ((prevState: number) => number)) => {},
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

    setSearchFormValues((prevInputValuesObj) => ({
      ...prevInputValuesObj,
      [name]: value,
    }));
  }

  function clearInputValues() {
    setSearchFormValues({});
  }

  const context = {
    displayedPage,
    setDisplayedPage,
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
    // Components Handlers
    onCloseAllModals,
    onMobileNavOpen,
    onTrashIconOnClick,
    onTakeToTopClick,
    setFindBookFormVisibilityHandler,
    setElementHeight,
    updateInputValues,
    clearInputValues,
  };

  return <UIContext.Provider value={context}>{children}</UIContext.Provider>;
};

export default UIContext;
