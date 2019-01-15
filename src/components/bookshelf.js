import React from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import DisplayBook from './books.js'

const ListBooks = props => {

	const {books, shelf, onChangeShelf}=props
		const menu =[
			{id:'currentlyReading', name:'Reading'},
			{id:'wantToRead', name:'Want to read'},
			{id:'read', name:'Already read'},
			{id:'none', name:'None'}
		]

		books.sort(sortBy('title'))

		return (
			<div className="bookshelf-title">
				<h2>{shelf}</h2>
				<div className='books-grid'>
					{books.length === 0 && (
						<div>None at this time...</div>
					)}
					<DisplayBook
						books={books}
	                    menu={menu}
	                    onMove={onChangeShelf}
			        />
               </div>
			</div>
		)
}

ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
	shelf: PropTypes.string.isRequired,
	onChangeShelf: PropTypes.func.isRequired
}

export default ListBooks