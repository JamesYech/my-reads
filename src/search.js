import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'
import  ListBooks from './bookshelf.js'
// import ListSearch from './ListSearch.js'
import sortBy from 'sort-by'

class SearchBooks extends Component {

	state = {
		query: '',
		books: [],
		noBooks: true  //no books returned
	}




	updateQuery = (query) => {

		this.setState({query: query.trim()})

		if (query) {

				BooksAPI.search(query).then((booksReturned) => {
					booksReturned.length > 0 ?
					this.setState({books:booksReturned, noBooks: false}) :
					this.setState({books:[],noBooks: true})
				})



		} else { this.setState({books:[], noBooks: false}) }
	}


	clearQuery = () => {
		this.setState({ query: ''})
	}

	render()  {
		const {onAddBook} = this.props
		const {query} = this.state


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

				<ListBooks books={this.state.books.sort(sortBy('title'))}
                    onChangeShelf={this.onAddBook}
                   />



			</div>
		) //return
	}
}


export default SearchBooks