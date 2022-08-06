import { useEffect, useState, useContext, useRef } from "react";

import classes from './AllBooks.module.css'
import FindBookForm from "../components/books/FindBookForm/FindBookForm";
import BookList from "../components/books/BookList";
import Pagination from "../components/ui/Pagination/Pagination";
import Preloader from "../components/ui/Preloader";
import GlobalContext from "../store/global-context";
import ErrorMessage from "../components/ui/ErrorMessage";

function AllBooks() {
  const globalCtx = useContext(GlobalContext);
  const globalCtxRef = useRef(globalCtx);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const [isQuerySuccessful, setIsQuerySuccessful] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const displayedPage = globalCtx.displayedPage;
  const totalBooksAvail = globalCtx.totalBooksAvail;

  const searchHandler = (query) => {
    globalCtx.changeDisplayedPage(1);
    setCurrentQuery(query);
    setIsLoading(true);
    setLoadedData([]);
  };

  useEffect(() => {
    let url = currentQuery ? `https://gnikdroy.pythonanywhere.com/api/book/?${currentQuery}&page=${displayedPage}` : `https://gnikdroy.pythonanywhere.com/api/book/?page=${displayedPage}`
    setIsLoading(true);

    fetch(`${url}`)
      .then((response) => {
        // console.log(response.json())
        if (!response.ok) {
          throw new Error("Sorry, We've run into issues. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        globalCtxRef.current.changeNumbOfBooksAvail(data.count);
        const results = [...data.results];
        setIsLoading(false);
        setLoadedData(results);
        setIsQuerySuccessful(true);
        globalCtxRef.current.takeToTopPaginationArrows();
      })
      .catch((error) => {
        setIsQuerySuccessful(false);
        setIsLoading(false);
      });
  }, [displayedPage, currentQuery]);

  return (
    <section className={classes['section']}>
      <h1>Let's find a good read for you.</h1>
      <FindBookForm onSearchHandler={searchHandler} />
      {isLoading && <Preloader />}
      {isQuerySuccessful && <BookList data={loadedData} />}
      {totalBooksAvail > 10 ? <Pagination /> : null}
      {!isLoading && !isQuerySuccessful && <ErrorMessage />}
    </section>
  );
}

export default AllBooks;
