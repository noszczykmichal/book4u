import { useSelector } from "react-redux";

import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const favorites = useSelector((state) => state.books.favorites);

  return (
    <section>
      <h1>Your favorite books</h1>
      {favorites.length ? (
        <BookList data={favorites} />
      ) : (
        <p>Add something to your favorites.</p>
      )}
    </section>
  );
}

export default FavoriteBooks;
