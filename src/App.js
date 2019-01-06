import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'
import SearchBooks from './search.js'
import  ListBooks from './bookshelf.js'
import {Route} from 'react-router-dom'
import './App.css';
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }  //CDidMount


addBook = (book, newShelf) => {





BooksAPI.update(book,newShelf).then(
              console.log(book.title+" updated")
            )
//
book.shelf=newShelf
this.setState(state => ({
      books: state.books.concat([ book ])
    }))

}


changeShelf = (bookID, newShelf) => {

      let booksCopy = this.state.books
      console.log(this.state.books)
      console.log(booksCopy)

      booksCopy.map((b) => {

          if(b.id === bookID) {
            b.shelf = newShelf
            BooksAPI.update(b,newShelf).then(
              console.log(b.title+" updated")
            )

          }

        })
      this.setState(booksCopy)
}

removeBook = (bookID) => {
  //probably use a .filter to remove the book
    //also call the api update function

}




  render() {



    return (

      <div>

        <header className="list-books-title">

          <h1>MyReads</h1>
        </header>

        <Route exact path="/" render={() => (

          <div>

            <div  className="bookshelf-title">
              <h2>Currently Reading</h2>
              <div className='books-grid'>
                <ListBooks
                  books={this.state.books.sort(sortBy('title')).filter((b) => b.shelf==='currentlyReading')}
                  onChangeShelf={this.changeShelf}
                 />
              </div>
            </div>

            <div className="bookshelf-title">
              <h2 >Want to Read</h2>
              <div className='books-grid'>
                <ListBooks books={this.state.books.sort(sortBy('title')).filter((b) => b.shelf==='wantToRead')}
                    onChangeShelf={this.changeShelf}
                />
              </div>
            </div>

            <div className="bookshelf-title">
              <h2 >Have Already Read</h2>
              <div className='books-grid'>
                  <ListBooks books={this.state.books.sort(sortBy('title')).filter((b) => b.shelf==='read')}
                    onChangeShelf={this.changeShelf}
                   />
              </div>
            </div>
            <div className="open-search">
               <Link
                to='/search'
                className='open-search-link'
                >Search
              </Link>
            </div>

          </div>
          )} //route "/""
          />



      <Route path="/search" render={({history}) =>
      (<SearchBooks

          onAddBook={this.addBook}


      />
        )}
      />
      </div>
     ); //return
  }
}

export default App;
