import { useContext, useRef, useEffect } from "react";

import GlobalContext from "../store/global-context";
import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const globalCtx = useContext(GlobalContext);
  const { totalFavorites, favorites } = globalCtx;
  const globalCtxRef = useRef(globalCtx);

  useEffect(() => {
    globalCtxRef.current.loadFavsFromLocStorage();
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
