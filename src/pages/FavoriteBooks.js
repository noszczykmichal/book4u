import { useContext } from "react";
import GlobalContext from "../store/global-context";

import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const favBooksContext = useContext(GlobalContext);

  return (
    <section>
      <h1>Your favorite books</h1>
      {favBooksContext.totalFavorites? (
        <BookList data={favBooksContext.favorites} />
      ) : (
        <p>Add something to your favorites.</p>
      )}
    </section>
  );
}

export default FavoriteBooks;
