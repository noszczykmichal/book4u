import { useContext, useRef, useEffect } from "react";
import GlobalContext from "../store/global-context";

import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const globalCtx = useContext(GlobalContext);
  const globalCtxRef = useRef(globalCtx);

  useEffect(() => {
    globalCtxRef.current.loadFavsFromLocStorage();
  }, []);

  return (
    <section>
      <h1>Your favorite books</h1>
      {globalCtx.totalFavorites ? (
        <BookList data={globalCtx.favorites} />
      ) : (
        <p>Add something to your favorites.</p>
      )}
    </section>
  );
}

export default FavoriteBooks;
