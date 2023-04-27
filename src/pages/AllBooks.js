import { useEffect, useState, useContext, useRef } from "react";

import classes from "./AllBooks.module.css";
import FindBookForm from "../components/books/FindBookForm/FindBookForm";
import BookList from "../components/books/BookList";
import Pagination from "../components/ui/Pagination/Pagination";
import Preloader from "../components/ui/Preloader";
import UIContext from "../store-context/uiContext";
import ErrorModal from "../components/ui/ErrorModal";

function AllBooks() {
  const uiContext = useContext(UIContext);
  const { displayedPage, totalBooksAvail, changeDisplayedPage } = uiContext;
  const uiContextRef = useRef(uiContext);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [errorData, setErrorMessage] = useState({
    apiError: false,
    errorMessage: "",
  });

  const searchHandler = (query) => {
    setErrorMessage({
      apiError: false,
      errorMessage: "",
    });

    if (query) {
      changeDisplayedPage(1);
      setCurrentQuery(query);
      setIsLoading(true);
      setLoadedData([]);
    } else {
      setErrorMessage({
        apiError: false,
        errorMessage: "Please provide a valid search options.",
      });
    }
  };

  useEffect(() => {
    const url = currentQuery
      ? `https://gnikdroy.pythonanywhere.com/api/book/?${currentQuery}&page=${displayedPage}`
      : `https://gnikdroy.pythonanywhere.com/api/book/?page=${displayedPage}`;
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
        uiContextRef.current.changeNumbOfBooksAvail(data.count);
        const results = [...data.results];
        setIsLoading(false);
        setLoadedData(results);
        uiContextRef.current.takeToTop("allBooks");
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage({
          apiError: true,
          errorMessage: error.message,
        });
      });
  }, [displayedPage, currentQuery]);

  return (
    <section className={classes.section}>
      <h1>Let&apos;s find a good read for you.</h1>
      <FindBookForm onSearchHandler={searchHandler} />
      {isLoading && <Preloader />}
      {!errorData.errorMessage && <BookList data={loadedData} />}
      {!errorData.errorMessage && totalBooksAvail > 10 ? <Pagination /> : null}
      {errorData.errorMessage && <ErrorModal errorDetails={errorData} />}
    </section>
  );
}

export default AllBooks;
