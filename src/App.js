import React,{ useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home';
import { BookStoreProvider } from './BookStore';
import { getAll, update } from './BooksAPI';


const App = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState([])
  const [shouldUpdate, setShouldUpdate] = useState(true)
  
  const read = books && books.filter((book) => book.shelf === 'read')

  const currentlyReading = books && books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead = books && books.filter((book) => book.shelf === 'wantToRead')

  useEffect(() => {
    if (shouldUpdate) {
      getAll()
        .then((data) => {
          setBooks(data)
        })
        .then(() => setShouldUpdate(false))
        .catch((err) => console.log(err))
    }
    setShouldUpdate(false)
  }, [shouldUpdate])

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
      setShouldUpdate(true)
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
