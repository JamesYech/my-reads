import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'

class SearchBooks extends Component {

state = {
	query: 'Hawking',
	bookSearch: []
	}



	updateQuery = (query) => {
		this.setState({query: query.trim()})
		this.getQuery(this.state,query)
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

	getQuery = (state,query) => {
		BooksAPI.search(query).then((booksReturned) =>
			this.setState({bookSearch: booksReturned}),

              console.log(this.state.booksReturned)

	)}

	render()  {
		// const {booksOnShelf}=this.props
		// this.updateBooks(booksOnShelf)

		const { myBooks} = this.props
		const {query} = this.state.query


		return (
		<div>
			<div className='search-books-input-wrapper'>
				<div className='search-books-bar'>
					<input
						type='text'
						placeholder='Search books'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
			</div>

			<div className='books-grid'>


				{this.state.bookSearch.map((book) => (
					<div className='book' key={book.id}>

						<div className='book-top test '>
							<img className='book-cover' src= {book.imageLinks.thumbnail} alt=''/>
							<button className='book-shelf-changer  ' > </button>
						{	// <div className='dropdown-content'>
							// 	<a onClick={() => onChangeShelf(book.id, 'read')} >Already Read</a>
							// 	<a onClick={() => onChangeShelf(book.id, 'wantToRead')}>Want to Read</a>
							// 	<a onClick={() => onChangeShelf(book.id, 'currentlyReading')}>Reading</a>
							// 	<a>Delete</a>
							// </div>
						}
						</div>
						<div className='book-title'>
							<span >{book.title}</span>
						</div>
						<div>
							<span  className='book-authors'>{book.authors[0]}</span>
						</div>

					</div>
				))}
			</div>
		</div>
		)

		}
}


export default SearchBooks