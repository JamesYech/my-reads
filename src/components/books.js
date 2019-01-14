import React, { Component } from 'react';
import sortBy from 'sort-by'
import PropTypes from 'prop-types';
import ShelfChanger from './shelfChanger.js'

class DisplayBook extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		menu: PropTypes.array.isRequired,
		onMove: PropTypes.func.isRequired
	}


	listAuthors = (authors) => {
		// console.log(authors)
		let authorList = []
		authors.forEach((author) => {
			authorList.push(<div className='book-authors' key={author}>{author}</div>)
		})
		return authorList
	}

	render() {

		const {books,menu, onMove} = this.props

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
								{this.listAuthors(book.authors)}
							</div>

						</div>
					))}
				</div>
			</div>
		) //return
	}
}

export default DisplayBook
