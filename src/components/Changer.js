import React, { useContext, useState }  from 'react'
import BookStoreContext from '../BookStore'




const Changer = ({ book }) => {
    const shelf = book.shelf ? book.shelf : 'none'
  const { handleShelf } = useContext(BookStoreContext)
  const [value, setValue] = useState(shelf)

  const onChangeHandler = (e) => {
    handleShelf(e.target.value, book)
    setValue(e.target.value)
  }
    return (
        <div className='book-shelf-changer'>
            <select value={value} onChange={onChangeHandler}>
                <option value='move' disabled>
                Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
            </select>
        </div>
    );
}

export default Changer
