import { FormEvent, RefObject } from "react";

//Api data types
export interface Agent {
  id: number;
  person: string;
  type: string;
}

export interface Resource {
  id: number;
  type: string;
  uri: string;
}

export interface Book {
  id: number;
  type: null;
  title: string;
  description: string;
  downloads: number;
  license: string;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  agents: Agent[];
  resources: Resource[];
}

//UI Types
export type ActionButtonId = "confirm" | "cancel";
export type ElementHeightType = "toggleBar" | "form";
export type TakeToTopAgent = "button" | "allBooks";
export type PaginationDirection = "previous" | "next";
export type FindBookFormInputNames =
  | "title_contains"
  | "description_contains"
  | "agent_name_contains"
  | "agent_birth_date_range_min"
  | "agent_birth_date_range_max"
  | "agent_death_date_range_min"
  | "agent_death_date_range_max"
  | "downloads_range_min"
  | "downloads_range_max";
export type FindBookFormSelectNames = "has_agent_type" | "languages";
export type SearchFormKeys = FindBookFormInputNames | FindBookFormSelectNames;
export type SearchFormObj = {
  [key in SearchFormKeys]: string;
};

//Context Types

export interface ContextPropsAndMethods {
  displayedPage: number;
  setDisplayedPage: (number: number) => void;
  displayedPageChangeHandler: (
    _param: number | ((prevState: number) => number),
  ) => void;
  totalBooksAvail: number;
  setTotalBooksAvailable: (number: number) => void;
  // Components State
  isBackdropVisible: boolean;
  isMobileNavVisible: boolean;
  isModalVisible: boolean;
  isFindBookFormVisible: boolean;
  toggleBarCurrentHeight: number;
  formCurrentHeight: number;
  searchFormValues: SearchFormObj;
  paginationValue: number;
  // Components Handlers
  onCloseAllModals: () => void;
  onMobileNavOpen: () => void;
  onTrashIconOnClick: () => void;
  onTakeToTopClick: (id: TakeToTopAgent) => void;
  setFindBookFormVisibilityHandler: () => void;
  setElementHeight: (
    elementName: ElementHeightType,
    referenceObj: RefObject<HTMLElement>,
  ) => void;
  updateInputValues: (event: FormEvent) => void;
  clearInputValues: () => void;
  setPaginatedPageValue: (val: number) => void;
}
