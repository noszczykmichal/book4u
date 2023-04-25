import { useContext, useRef, useEffect } from "react";

import UIContext from "../store-context/uiContext";
import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const uiContext = useContext(UIContext);
  const { totalFavorites, favorites } = uiContext;
  const uiContextRef = useRef(uiContext);

  useEffect(() => {
    uiContextRef.current.loadFavsFromLocStorage();
  }, []);

  return (
    <section>
      <h1>Your favorite books</h1>
      {totalFavorites ? (
        <BookList data={favorites} />
      ) : (
        <p>Add something to your favorites.</p>
      )}
    </section>
  );
}

export default FavoriteBooks;
