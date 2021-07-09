import React from 'react';

// import { BookStoreContext } from '../BookStore'
import { Link } from 'react-router-dom'
// import { update } from '../BooksAPI';


const SearchLink = () => {
    // const { books, setBooks } = useContext(BookStoreContext)


    return (
        <div>
             <div className='toolbar'>
        <Link to='/search'>
          <button style={{"fontSize":"40px","width":"50px", "height":"50px", "borderRadius":"50%", "backgroundColor":"green"}}>+</button>
        </Link>
      </div>
        </div>
    )
}

export default SearchLink
