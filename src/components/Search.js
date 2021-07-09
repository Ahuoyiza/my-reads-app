import React , { useState, useEffect }from 'react';
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import { search } from '../BooksAPI';
import { Debounce } from '../Debounce';


const Search = ({shelf}) => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [message, setMessage] = useState('')
  const [value, setValue] = useState(shelf)

  useEffect(() => {
    if (!query) {
      setSearchResults([])
      setMessage('')
    }
    query && search(query).then((data) => setSearchResults(data))
  }, [query])

  useEffect(() => {
    if (query.length && !searchResults.length) {
      setTimeout(() => {
        setMessage('Oops! Book not found, Try another search term!')
      }, 1000)
    }
  }, [query, searchResults])

  const debouncedSave = Debounce((value) => setQuery(value), 500)

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase()
    setValue(text)
    debouncedSave(text)
  }
    return (
      <div className='search-books'>
          <div className='search-books-bar'>
            <Link className='close-search' to='/'>
              Close
            </Link>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title or author'
                onChange={handleChange}
                value={value}
              />
            </div>
          </div>
          <div className='search-books-results'>
            {searchResults.length ? (
              <ListBooks search={true} books={searchResults} />
            ) : (
              <strong >{message}</strong>
            )}
          </div>
      </div>
    )
}

export default Search
