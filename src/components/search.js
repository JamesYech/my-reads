import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../utils/BooksAPI.js'
import DisplayBook from './books.js'
import {cleanUp} from '../utils/helpers.js'

class SearchBooks extends Component {

	static propTypes = {
	    onAddBook: PropTypes.func.isRequired
  	}

	state = {
		query: '',
		books: [],
		noBooks: true , //no books returned
	}

	componentDidMount() {
		document.getElementById('searchInput').focus()
  	}

	updateQuery = (query) => {
		console.log('query')
		this.setState({query: query})
		if (query) {
				BooksAPI.search(query).then((booksReturned) => {
					booksReturned.length > 0
						? this.cleanUpBooks(booksReturned)
						: this.setState({books:[],noBooks: true})
				})
		} else { this.setState({books:[], noBooks: true}) }
	}

	cleanUpBooks = (booksReturned) => {
		let cleanBooks = cleanUp(booksReturned, this.props.books, true)
		this.setState({books:cleanBooks})
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
					<div className='search-books-input-wrapper'>
						<input
							id='searchInput'
							type='text'
							placeholder='Search books'
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
							autoFocus
						/>
					</div>
               	</div>
				<div className='search-books-results'>
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
		)
	}
}

export default SearchBooks