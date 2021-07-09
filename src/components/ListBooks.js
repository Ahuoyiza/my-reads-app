import React from 'react';
import Book from './Book';

const ListBooks = ({ books, search }) => {
    return (
        <ol className='books-grid'>{books && books.map((book) => <Book key={book.id} book={book} search={search} />)}</ol>
    )
}

export default ListBooks
