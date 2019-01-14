import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI.js'
import SearchBooks from './search.js'
import BookCase from './bookCase.js'
import {cleanUp} from '../utils/helpers.js'
import '../css/App.css';

class App extends Component {

  	state = {
		books: []
  	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			let cleanBooks = cleanUp(books, false)
	  		this.setState({books:cleanBooks})
		})
	}

	addBook = (book, newShelf) => {
		let duplicate = false
		for (let item of this.state.books) {
			if (book.id === item.id) {
				duplicate=true
			}
		}

		if (!duplicate) {
			BooksAPI.update(book,newShelf)
				book.shelf=newShelf
				this.setState(state => ({
					books: state.books.concat([ book ])
			}))
		} else { this.changeShelf(book, newShelf) }
	}

	changeShelf = (book, newShelf) => {
		BooksAPI.update(book,newShelf)
		book.shelf=newShelf
		this.setState(prevState => ({
			books: prevState.books
				.filter(b => b.id !== book.id)
				.concat(book)
		}))
	}

  	render() {
		return (
			<div>
				<Switch>
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
							   	<Link to='/search' className='open-search-link'>
							   		Search
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
					<Route render= {() => (
						<div>
							<p>Hmmm...That page appears to have wandered off.  Try this one: </p>
							<Link to="/">myReads Homepage</Link>
						</div>
					)} />
				</Switch>
			</div>
	 	)
  	}
}

export default App