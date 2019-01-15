import React from 'react';
import sortBy from 'sort-by'
import PropTypes from 'prop-types';
import ShelfChanger from './shelfChanger.js'

const DisplayBook = props => {

	const {books,menu, onMove} = props

	const listAuthors = (authors) => {
		let authorList = []
		authors.forEach((author) => {
			authorList.push(<div className='book-authors' key={author}>{author}</div>)
		})
		return authorList
	}

	books.sort(sortBy('title'))

	return (
		<div>
			<div className='books-grid'>
				{books.map((book) => (
					<div className='book' key={book.id}>
						<div className='book-top'>
							<img
								className='book-cover'
								src= {book.coverImage} alt={book.title}
							/>
							<ShelfChanger
								book={book}
								menu={menu}
								onMove={onMove}
							/>
						</div>
						<div className='book-title'>
							{book.title}
						</div>
						<div>
							{listAuthors(book.authors)}
						</div>

					</div>
				))}
			</div>
		</div>
	)
}

DisplayBook.propTypes = {
	books: PropTypes.array.isRequired,
	menu: PropTypes.array.isRequired,
	onMove: PropTypes.func.isRequired
}

export default DisplayBook