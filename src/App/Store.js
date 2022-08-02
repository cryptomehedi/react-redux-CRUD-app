import { configureStore } from "@reduxjs/toolkit"
import BooksReducer from "../Components/Features/Books/BookSlice"


const store = configureStore({
    reducer : {
        booksReducer: BooksReducer
    }
})

export default store