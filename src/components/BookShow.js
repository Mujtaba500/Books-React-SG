import {useState} from 'react'
import BookEdit from './BookEdit'

function BookShow({book, onDelete, onEdit}){
    const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick = (e) => {
        onDelete(book.id)
    }

    const handleEditClick = (id, newTitle) => {
    setShowEdit(!showEdit)
    onEdit(id, newTitle) 
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit) 
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleEditClick} book={book}/>
    }
    
    return(
        <div className='book-show'>
            <div>{content}</div>
        <div className='actions'>
            <button className='edit' onClick={handleShowEdit}>Edit</button>
            <button className='delete' onClick={handleDeleteClick}>Delete</button>
        </div>
        </div>
    )
}

export default BookShow