import { useContext } from "react";
import GlobalContext from "../../../store/global-context";

import classes from "./Pagination.module.css";
import PaginationArrow from "./PaginationArrow";

function TablePagination() {
  const globalCtx = useContext(GlobalContext);
  const totalPagesCount = Math.ceil(globalCtx.totalBooksAvail / 10);

  const paginationInputHandler = (event) => {
    // setCurrentPage(null);
    // event.target.setAttribute('type', 'text');
    // event.target.value='';


    // const paginationInputValue = +event.target.value;

    // if (
    //   paginationInputValue &&
    //   paginationInputValue > 0 &&
    //   paginationInputValue <= Math.ceil(totalBooksAvail / 10)
    // ) {
    //   setCurrentPage(paginationInputValue);
    // }
  };

  return (
    <div className={classes["pagination"]}>
      <PaginationArrow type="left" />
      <input
        type="number"
        className={classes["pagination__input"]}
        onChange={paginationInputHandler}
        value={0}
      />
      <span>of</span>
      <span>{totalPagesCount}</span>
      <PaginationArrow type="right"/>
    </div>
  );
}

export default TablePagination;
