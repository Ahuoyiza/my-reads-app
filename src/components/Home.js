import React from 'react';
import { useContext } from 'react';
import BookShelf from './BookShelf';
import BookStoreContext from '../BookStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from './Search';

import SearchLink from './SearchLink';

const Home = () => {
    const { currentlyReading ,wantToRead, read, } = useContext(BookStoreContext)
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                    <div className='list-books'>
                        
                        <div style={{"backgroundColor":"green"}}>
                            <h1>My Reads</h1>
                        </div>
                        <SearchLink />
                        <div>
                            <BookShelf name='Currently Reading' books={currentlyReading} />
                            <BookShelf name='Want to Read' books={wantToRead} />
                            <BookShelf name='Read' books={read} />
                        </div>
                    </div>
                    </Route>
                    <Route path='/search'>
                    <Search />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Home
