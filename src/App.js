import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'
import SearchBooks from './search.js'
import BookCase from './bookCase.js'
import './App.css';
import {cleanUp} from './getBooks.js'

class App extends Component {

  	state = {
		books: []
  	}

  componentDidMount() {
	BooksAPI.getAll().then((books) => {
			let cleanBooks = cleanUp(books)
	  		this.setState({books:cleanBooks})

	}
	)
  }

addBook = (book, newShelf) => {

	let duplicate = false
	for (let item of this.state.books) {
		if (book.id === item.id) {
			console.log("book already in book case")
			duplicate=true
		}
	}

	if (!duplicate) {
		BooksAPI.update(book,newShelf).then(
				  console.log(book.title+" updated"),
				  console.log(newShelf+" is shelf")
				)
			//
			console.log("before"+this.state.books)
			book.shelf=newShelf
			this.setState(state => ({
				  books: state.books.concat([ book ])
				}))
			console.log("after"+this.state.books)


		} else {
			this.changeShelf(book, newShelf)
		}




}



changeShelf = (book, newShelf) => {



	  let booksCopy = this.state.books
	  booksCopy.forEach((b) => {

		  if(b.id === book.id) {
			b.shelf = newShelf

			BooksAPI.update(b,newShelf)
		  }

		})
	  this.setState(booksCopy)


}






  render() {



	return (
		<div>

			<Route exact path="/" render={({history}) => (
			  	<div>
				  	<div>
				  		<header className="list-books-title">
				  			<h1>MyReads</h1>
						</header>
					</div>

					<BookCase
						books={this.state.books}
						onChangeShelf={this.changeShelf}
					 />
					 <div className="open-search">
						   <Link
							to='/search'
							className='open-search-link'
							>Search
						  </Link>
					</div>
				</div>
			)} />

			<Route path="/search" render={({history}) => (
				<SearchBooks
					onAddBook={this.addBook}
					books={this.state.books}
				/>
			)} />


		</div>
	 ); //return
  }
}

export default App;
