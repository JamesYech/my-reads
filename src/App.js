import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'
// import ListBooks from './bookshelf.js'
import  ListBooks from './bookshelf.js'

import './App.css';

class App extends Component {

  state = {
    books: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }  //CDidMount


changeShelf = (book, newShelf) => {
      this.setState((state) => ({
        books: state.books.book.shelf = newShelf
      }))
    }



  render() {

    return (
      //most of this should be moved to the listbooks component
      <div>
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <div  className="bookshelf-title">
          <h2>Currently Reading</h2>

          <ListBooks
            books={this.state.books}
            shelfName='currentlyReading'

          />

        </div>

        <div className="bookshelf-title">
          <h2 >Want to Read</h2>
          <ListBooks
            books={this.state.books}
            shelfName='wantToRead'

          />
        </div>

        <div className="bookshelf-title">
          <h2 >Have Already Read</h2>
          <ListBooks
            books={this.state.books}
            shelfName='read'

          />
        </div>
      </div>
    );
  }
}

export default App;
