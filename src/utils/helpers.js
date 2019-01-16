import * as BooksAPI from '../utils/BooksAPI.js'
import noCover from '../icons/nocover.png'

//Identify and reset missing titles,
//authors, and cover images
//Compares search returns to myReads collection
//and set shelves accordingly
//props are returnedBooks and checkShelves
export function cleanUp(state, props) {

	if (props.returnedBooks) {
		for (let b1 of props.returnedBooks) {
			if (!(b1 && b1.authors && b1.authors.length && b1.authors[0])) {
				b1.authors =['Unlisted Author']
			}
			if (b1 && b1.imageLinks && b1.imageLinks.thumbnail) {
				b1.coverImage=b1.imageLinks.thumbnail
			} else {
				b1.coverImage=noCover
			}
		}
	}
	if (props.checkShelves) {
		for (let b1 of props.returnedBooks) {
			let b2 = state.filter(b => b.id === b1.id)
			if (b2.length > 0) {
				b1.shelf = b2[0].shelf
			} else {
				b1.shelf = "none"
			}
		}
	}
	return { books: props.returnedBooks}
}

export function newChangeShelf(state, props) {
	BooksAPI.update(props.book,props.newShelf)
	props.book.shelf=props.newShelf
	return {
		books: state.books
			.filter(b => b.id !== props.book.id)
			.concat(props.book)
	}
}