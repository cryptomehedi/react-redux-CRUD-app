import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const BooksView = () => {

    const books = useSelector((state) => state.booksReducer.books)
    return (
        <div className='bg-orange-100'>
            <h2 className='text-center text-3xl font-semibold mt-10'>List of books</h2>
            <table className="m-8 border-collapse">
                <thead>
                    <tr>
                        <th className="border-black p-4 border">Id</th>
                        <th className="border-black p-4 border">Title</th>
                        <th className="border-black p-4 border">Author</th>
                        <th className="border-black p-4 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map(book => <tr key={book.id} >
                            <td className="border-black p-4 border">{book.id}</td>
                            <td className="border-black p-4 border">{book.title}</td>
                            <td className="border-black p-4 border">{book.author}</td>
                            <td className="border-black p-4 border flex justify-between">
                                <button className="w-20 m-2 p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white"><FontAwesomeIcon icon={faEdit}/></button>
                                <button className="w-20 m-2 p-1 rounded-lg cursor-pointer hover:bg-black hover:text-white"><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;