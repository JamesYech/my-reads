import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI.js'
import {Link} from 'react-router-dom'
import DisplayBook from './books.js'
import {cleanUp, setShelves} from './getBooks.js'


class SearchBooks extends Component {

	state = {
		query: '',
		books: [],
		noBooks: true , //no books returned
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
		if (query) {
				BooksAPI.search(query).then((booksReturned) => {
					booksReturned.length > 0
						? this.setState({books:booksReturned, noBooks: false}, () => this.cleanUpBooks())
						: this.setState({books:[],noBooks: true})
				})
		} else { this.setState({books:[], noBooks: true}) }



	}//end updateQuery


	cleanUpBooks = () => {

		let cleanBooks = cleanUp(this.state.books)
		let setBooks = setShelves(cleanBooks, this.state.books)
		this.setState({books:setBooks})



	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

	render()  {
		const {onAddBook} = this.props
		const {query} = this.state
		const menu =[
			{id:'currentlyReading', name:'Reading'},
			{id:'wantToRead', name:'Want to read'},
			{id:'read', name:'Already read'},
			{id:'none', name:'None'}
		]

		return (
			<div >
				<div className='search-books-bar'>
					<div >
		            	<Link to='/' className='close-search'>Back</Link>
		            </div>
					<div className='search-books-input-wraper'>
						<input
							type='text'
							placeholder='Search books'
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
               	</div>

				<div className='search-books-results' >
					{this.state.noBooks && (
						<div>No results...</div>
					)}
					<DisplayBook
						books={this.state.books}
	                    menu={menu}
	                    onMove={onAddBook}
			        />
               </div>
			</div>
		) //return
	} //render
} //class


export default SearchBooks