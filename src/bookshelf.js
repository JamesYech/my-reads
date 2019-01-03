import React, { Component } from 'react';
// import * as BooksAPI from './utils/BooksAPI.js'



class ListBooks extends Component {


	render() {

		const {books, onChangeShelf}=this.props

		return (

			<div className='books-grid'>
				{books.map((book) => (
					<div className='book' key={book.id}>

						<div className='book-top test '>
							<img className='book-cover' src= {book.imageLinks.thumbnail} alt=''/>
							<button className='book-shelf-changer  ' > </button>
							<div className='dropdown-content'>
								<a onClick={() => onChangeShelf(book.id, 'read')} >Already Read</a>
								<a onClick={() => onChangeShelf(book.id, 'wantToRead')}>Want to Read</a>
								<a onClick={() => onChangeShelf(book.id, 'currentlyReading')}>Reading</a>
								<a>Delete</a>
							</div>
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

			)
	} //render
}  //ListBooks



export default ListBooks