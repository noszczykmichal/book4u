import { useState, useEffect } from "react";

function BooksSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedBooks, setLoadedBooks]=useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://gnikdroy.pythonanywhere.com/api/book/")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        let currentlyLoaded=data.results;
        console.log(currentlyLoaded)
        // setLoadedBooks(currentlyLoaded);
      });
  }, []);

  let currentContent;

  if (isLoading) {
    currentContent = <div>It's loading</div>;
  }

  return (
    <div>
      <h1>Search for a new book</h1>
      {currentContent}
    </div>
  );
}

export default BooksSearch;
