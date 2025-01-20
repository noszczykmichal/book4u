import { useAppSelector } from "../hooks/useReduxHooks";
import BookList from "../components/books/BookList";

function FavoriteBooks() {
  const favorites = useAppSelector((state) => state.books.favorites);

  const content = favorites.length ? (
    <BookList data={favorites} />
  ) : (
    <p>Add something to your favorites.</p>
  );

  return (
    <section>
      <h1>Your favorite books</h1>
      {content}
    </section>
  );
}

export default FavoriteBooks;
