import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from '../Features/Books/AddBooks';
import BooksView from '../Features/Books/BooksView';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Footer from '../Shared/Footer';
import Nav from '../Shared/Nav';

const Index = () => {
    return (
        <BrowserRouter>
            <Nav/>
            <main className='min-h-[90vh] flex justify-center items-start'>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<Error/>} />
                    <Route path='/show-books' element={<BooksView/>} />
                    <Route path='/add-books' element={<AddBooks/>} />
                </Routes>
                
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default Index;