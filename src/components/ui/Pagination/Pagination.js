import { useContext } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

function TablePagination() {
  const globalCtx = useContext(GlobalContext);
  const {
    totalBooksAvail,
    inputPaginationSetter,
    changeDisplayedPage,
    paginationValue,
  } = globalCtx;
  const totalPagesCount = Math.ceil(totalBooksAvail / 10);

  const onKeyDownHandler = (event) => {
    if (event.key === "Backspace") {
      inputPaginationSetter("");
    } else if (event.key === "Enter") {
      changeDisplayedPage(paginationValue);
    }
  };

  const paginationInputHandler = (event) => {
    if (+event.target.value >= 1 && +event.target.value <= totalPagesCount) {
      inputPaginationSetter(+event.target.value);
    }
  };

  return (
    <div className={classes.pagination}>
      <PaginationArrow type="left" />
      <input
        type="number"
        className={classes.pagination__input}
        onChange={paginationInputHandler}
        value={paginationValue}
        onKeyDown={onKeyDownHandler}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow type="right" />
    </div>
  );
}

export default TablePagination;
