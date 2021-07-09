import React,{ useContext }from 'react';

import { BookStoreContext } from '../BookStore'
import BookList from './ListBooks'
import icon from '../icons/delete.svg'
import { update } from '../BooksAPI'

const BookShelf = ({name, books}) => {
    const { read, wantToRead,currentlyReading,  setBooks } = useContext(BookStoreContext)

    const handleDelete = () => {
        if (name === 'Currently Reading') {
          setBooks([...wantToRead, ...read])
        }
        if (name === 'Want to Read') {
          setBooks([...currentlyReading, ...read])
        }
        if (name === 'Read') {
          setBooks([...currentlyReading, ...wantToRead])
        }
    
        books.map((book) => update(book.id, 'none'))
      }
    
    return (
        <div>
            <section className='bookshelf'>
      <div>
        <h2 className='bookshelf-title'>
          {name && name}
        </h2>
        {books.length ? (
          <img style={{ cursor: 'pointer' }} onClick={handleDelete} width='26px' src={icon} alt='empty shelf' />
        ) : (
          ''
        )}
      </div>

      <div className='bookshelf-books'>
        <BookList books={books} />
      </div>
    </section>
        </div>
    )
}

export default BookShelf
