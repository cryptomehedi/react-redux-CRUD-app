import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const AddBooks = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')

    const numberOfBooks = useSelector(state => state.booksReducer.books.length)
    console.log(numberOfBooks);
    const handleSubmit = (e) => {
        e.preventDefault()
        const book = {id: numberOfBooks + 1 ,title, author}
    }

    return (
        <div>
            <h2>This is add books</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={e=> setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={author} onChange={e=> setAuthor(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBooks;