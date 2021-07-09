import React from 'react';

import BookList from './ListBooks'
const BookShelf = ({name, books}) => {
    return (
        <div>
            <section className='bookshelf'>
      <div>
        <h2 className='bookshelf-title'>
          {name && name}
        </h2>
      </div>

      <div className='bookshelf-books'>
        <BookList books={books} />
      </div>
    </section>
        </div>
    )
}

export default BookShelf
