import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'
import SearchBooks from './search.js'
import  ListBooks from './bookshelf.js'
import {Route} from 'react-router-dom'
import './App.css';
import {Link} from 'react-router-dom'
// import sortBy from 'sort-by'

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


changeShelf = (book, newShelf) => {

      let booksCopy = this.state.books
      console.log(this.state.books)
      console.log(booksCopy)

      booksCopy.forEach((b) => {

          if(b.id === book.id) {
            b.shelf = newShelf
            BooksAPI.update(b,newShelf).then(
              console.log(b.title+" updated")
            )

          }

        })
      this.setState(booksCopy)
}

removeBook = (book) => {
  this.setState((state) => ({
    books: state.books.filter((b) => b.id !== book.id)
  }))

  let newShelf="removed"
  BooksAPI.update(book,newShelf).then(
              console.log(book.title+" removed")
            )


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



      <Route path="/search" render={({history}) => (
          <SearchBooks
            onAddBook={this.addBook}
          />
        )}
      />

      </div>
     ); //return
  }
}

export default App;
