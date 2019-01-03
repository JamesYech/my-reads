import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'

import  ListBooks from './bookshelf.js'

import './App.css';

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }  //CDidMount


changeShelf = (bookID, newShelf) => {

      let booksCopy = this.state.books
      console.log(this.state.books)
      console.log(booksCopy)

      booksCopy.map((b) => {
          if(b.id === bookID) {
            b.shelf = newShelf
          }
        })
      this.setState(booksCopy)


    }



  render() {



    return (

      <div>
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>

          <div>
            <div  className="bookshelf-title">
              <h2>Currently Reading</h2>


                  <ListBooks
                    books={this.state.books.filter((b) => b.shelf==='currentlyReading')}
                    onChangeShelf={this.changeShelf}
                   />
                </div>
            </div>

            <div className="bookshelf-title">
              <h2 >Want to Read</h2>
              <div className='books-grid'>

                  <ListBooks books={this.state.books.filter((b) => b.shelf==='wantToRead')}
                    onChangeShelf={this.changeShelf}
                   />
                </div>
            </div>

            <div className="bookshelf-title">
              <h2 >Have Already Read</h2>
              <div className='books-grid'>

                  <ListBooks books={this.state.books.filter((b) => b.shelf==='read')}
                    onChangeShelf={this.changeShelf}
                   />
                </div>
          </div>

      </div>








    );
  }
}

export default App;
