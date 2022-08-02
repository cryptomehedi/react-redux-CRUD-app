import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books : [
        {id: '1', title: 'Love Bangladesh', author: 'Mehedi'},
        {id: '2', title: 'Love Bangladeshi People', author: 'Adnan'},
        {id: '3', title: 'Bangladeshi People', author: 'Ullash'},
    ]
}

const booksSlice = createSlice({
    name: 'Books',
    initialState: initialBooks,
    reducers: {
        showBooks : state => state,

    },
})

export const { showBooks } = booksSlice.actions

export default booksSlice.reducer