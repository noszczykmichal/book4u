import Card from "../components/ui/Card";
import FindBookForm from "../components/books/FindBookForm";

function FindBook() {
  const searchHandler = (query) => {
    // console.log(query);
    fetch(`https://gnikdroy.pythonanywhere.com/api/book/?${query}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <h1>Haven't found something matching?</h1>
      <p>Browse the PG catalogue to find something interesting.</p>
      <Card>
        <FindBookForm onSearchHandler={searchHandler} />
      </Card>
    </section>
  );
}

export default FindBook;
