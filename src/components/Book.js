import React ,{ useContext }from 'react';
import BookStoreContext from '../BookStore'
import Changer from './Changer'


const Book = ({ book, search }) => {
const { id, title, authors, shelf,  imageLinks } = book
  const { books } = useContext(BookStoreContext)

  const isBook = () => {
    if (search) {
      return books && books.find((book) => book.id === id)
    }
  }

  const bookcover = imageLinks ? book.imageLinks.thumbnail : console.log(null)

  const allAuthors = authors && authors.map((author) => <p key={author}>{author}</p>)
    return (
        <>
            <li>
                <div className='book'>
                    <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url(${bookcover})`,
                        }}
                    >
                        <Changer shelf={shelf} book={isBook() !== undefined ? isBook() : book} search={search} />
                    </div>
                    </div>
                    {title}
                    </div>
                    <div  className='book-authors'>
                    {allAuthors}
                    
                </div>
            </li>
        </>
    )
}

export default Book
