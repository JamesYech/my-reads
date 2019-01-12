import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ListBooks from './bookshelf.js'

class BookCase extends Component {
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    onChangeShelf: PropTypes.func.isRequired
  	}

	render() {
		const {books, onChangeShelf} = this.props
	  	const shelves = [
	  		{key:'currentlyReading', name:'Reading'},
			{key:'wantToRead', name:'Want to Read'},
			{key:'read', name:'Already Read'},
			{key:'none', name:'Recently Removed'}
	  	]

		return (
			<div>
				{shelves.map((shelf, i) =>
				  	<ListBooks
			  			key={i}
		  				books={books.filter((b) => b.shelf===shelf.key)}
		  				shelf={shelf.name}
		  				onChangeShelf={onChangeShelf}
		  			/>
				)}
			</div>
		 )
	}
}

export default BookCase