import React from 'react'
import PropTypes from 'prop-types'
import  ListBooks from './bookshelf.js'


const BookCase = props => {

	const {books, onChangeShelf} = props
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

BookCase.propTypes = {
	books: PropTypes.array.isRequired,
	onChangeShelf: PropTypes.func.isRequired
}

export default BookCase