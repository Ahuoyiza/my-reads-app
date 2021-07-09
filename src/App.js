import React,{ useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home';
import { BookStoreProvider } from './BookStore';
import { getAll, update } from './BooksAPI';
import Search from './components/Search';
import ListBooks from './components/ListBooks';

// const shelves = [
//   {
//     id:1,
//     name: 'Currently Reading',
//   },
//   {
//     id:2,
//     name: 'Want to Read'
//   },
//   {
//     id:3,
//     name: 'Read'
//   }
// ];

const App = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState([])
  const [update, setUpdate] = useState(true)

  const read = books && books.filter((book) => book.shelf === 'read')

  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')

  useEffect(() => {
    if (update) {
      getAll()
        .then((data) => {
          setBooks(data)
        })
        .then(() => setUpdate(false))
        .catch((err) => console.log(err))
    }
    setUpdate(false)
  }, [update])

  const handleShelfBooks = (shelf, book) => {
    const { id } = book
    update(id, shelf)
    const isBook = books.find((book) => book.id === id)
    if (isBook !== undefined) {
      const allBooks = [...books]
      const bookIndex = allBooks.findIndex((book) => book.id === id)
      allBooks[bookIndex].shelf = shelf
      setBooks(allBooks)
    } else {
      setUpdate(true)
      setBooks([...books, book])
    }
  }


    return (
      <div className="app">
        <BookStoreProvider
            value={{
            books,
            search,
            currentlyReading,
            read,
            wantToRead,
            setSearch,
            setBooks,
            handleShelfBooks,
          }}
        >
          <Home />
        </BookStoreProvider>
      </div>
    )
  
}

export default App
