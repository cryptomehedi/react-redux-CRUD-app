import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='bg-red-300 h-[5vh] flex justify-center items-center p-4'>
            <Link className='text-black mx-2 duration-300 hover:text-white ' to='/'>Home</Link>
            <Link className='text-black mx-2 duration-300 hover:text-white ' to='/show-books'>Show Books</Link>
            <Link className='text-black mx-2 duration-300 hover:text-white ' to='/add-books'>Add Book</Link>
        </nav>
    );
};

export default Nav;