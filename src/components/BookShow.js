import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/book.js";

function BookShow({ book }) {
  const { deleteBookById } = useContext(BookContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = (e) => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleEditClick} book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleShowEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
