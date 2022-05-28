import { useState, useEffect } from "react";

import BookList from "../components/books/BookList";
import TablePagination from "../components/ui/TablePagination/TablePagination";
import "./AllBooks.module.css";

function AllBooks() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [totalPagesAvail, setPagesAvailable] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const paginationArrowHandler = (buttonId) => {
    if (buttonId === "right" && currentPage <= totalPagesAvail) {
      return setCurrentPage((prevState) => prevState + 1);
    } else if (buttonId === "left" && currentPage >= 0) {
      return setCurrentPage((prevState) => prevState - 1);
    }
  };

  const paginationInputHandler = (event) => {
    const paginationInputValue = +event.target.value;

    if (paginationInputValue && (paginationInputValue>0 &&paginationInputValue<=totalPagesAvail)) {
      setCurrentPage(paginationInputValue);
    }
  };

  useEffect(() => {
    const fetchHandler = () => {
      let url = `https://gnikdroy.pythonanywhere.com/api/book/?page=${currentPage}`;

      return fetch(url);
    };

    setIsLoading(true);
    fetchHandler()
      .then((response) => response.json())
      .then((data) => {
        setPagesAvailable(data.count);
        setIsLoading(false);
        let currentlyLoaded = data.results;
        console.log(data.results);
        setLoadedBooks(currentlyLoaded);
      });
  }, [currentPage]);

  let currentContent;
  let pagination = false;

  if (isLoading) {
    currentContent = <div>It's loading</div>;
  } else {
    currentContent = <BookList data={loadedBooks} />;
    pagination = true;
  }

  return (
    <section>
      <h1>Pick up something new to read:</h1>
      {currentContent}
      {pagination ? (
        <TablePagination
          totalPagesCount={totalPagesAvail}
          value={currentPage}
          paginationArrowHandler={paginationArrowHandler}
          inputChangeHandler={paginationInputHandler}
        />
      ) : null}
    </section>
  );
}

export default AllBooks;
