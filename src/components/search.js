import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
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
		// console.log(query)
		// console.log(this.state)
		let checkShelves=true
		this.setState({query: query})
		if (query) {
				BooksAPI.search(query).then((returnedBooks) => {
					returnedBooks.length > 0
						? this.setState(cleanUp(this.props.myBooks,{returnedBooks, checkShelves }))
						: this.setState({books:[],noBooks: true})
				})
		} else { this.setState({books:[], noBooks: true}) }
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
						<DebounceInput
							debounceTimeout={200}
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