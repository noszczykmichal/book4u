import { useState, useEffect } from "react";

import BookList from "../components/books/BookList";
import TablePagination from "../components/ui/TablePagination/TablePagination";

function BooksSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [totalPagesAvail, setPagesAvailable] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://gnikdroy.pythonanywhere.com/api/book/")
      .then((response) => response.json())
      .then((data) => {
        setPagesAvailable(data.count);
        setIsLoading(false);
        let currentlyLoaded = data.results;
        // console.log(data.results);
        setLoadedBooks(currentlyLoaded);
      });
  }, []);

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
      {pagination ? <TablePagination totalPagesCount={totalPagesAvail}/> : null}
    </section>
  );
}

export default BooksSearch;
