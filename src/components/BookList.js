import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/book.js";

function BookList() {
  const { books } = useContext(BookContext);

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
