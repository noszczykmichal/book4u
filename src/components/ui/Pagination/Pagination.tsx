import { FormEvent, useContext, KeyboardEvent } from "react";

import UIContext from "../../../store-context/uiContext";
import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

const TablePagination = () => {
  const uiContext = useContext(UIContext);
  const {
    totalBooksAvail,
    setPaginatedPageValue,
    displayedPageChangeHandler,
    paginationValue,
  } = uiContext;
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      displayedPageChangeHandler(paginationValue);
    }
  };

  const paginationInputHandler = (event: FormEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    if (+eventTarget.value >= 1 && +eventTarget.value <= totalPagesCount) {
      setPaginatedPageValue(+eventTarget.value);
    }
  };

  return (
    <div className={classes.pagination}>
      <PaginationArrow direction="previous" />
      <input
        type="number"
        className={classes.pagination__input}
        onChange={paginationInputHandler}
        value={paginationValue}
        onKeyDown={onKeyDownHandler}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow direction="next" />
    </div>
  );
};

export default TablePagination;
