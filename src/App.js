import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/book.js";

export default function App() {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
