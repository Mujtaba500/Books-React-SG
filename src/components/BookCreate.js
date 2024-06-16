import {useState} from 'react';

function BookCreate({onCreate}){
    const [title,changeTitle] = useState('')

    const handleChange = (e) => {
        changeTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(title)
        changeTitle('')
    }

    return(
        <div className='book-create'>
            <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange}/>
            <button className='button'> Create!</button>
        </form>
        </div>
    )
}

export default BookCreate