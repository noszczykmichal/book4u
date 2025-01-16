import { useAppSelector } from "../hooks/useReduxHooks";
import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const favorites = useAppSelector((state) => state.books.favorites);

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
