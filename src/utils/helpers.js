// Helper functions

//Identify and reset missing titles,
//authors, and cover images
//
//Compares search returns to myReads collection
//and set shelves accordingly

import * as BooksAPI from '../utils/BooksAPI.js'
import noCover from '../icons/nocover.png'


export function cleanUp(state,props) {
	//props are apiBooks and checkShelves
	// console.log(state)
	if (props.returnedBooks) {
		for (let b1 of props.returnedBooks) {
			if (!b1.authors && !b1.authors[0]) {
				b1.authors =['Unlisted Author']
			}

			if (b1.imageLinks && b1.imageLinks.thumbnail) {
				b1.coverImage=b1.imageLinks.thumbnail
			} else {
				b1.coverImage={noCover}
			}
		}
	}

	if (props.checkShelves) {
		for (let b1 of props.returnedBooks) {

			let b2 = state.books.filter(b => b.id === b1.id)

			if (b2.length > 0) {
				b1.shelf = b2[0].shelf


			} else {
				b1.shelf = "none"

			}
		}
	}
	return { books: props.returnedBooks}

}

export function cleanUp2(books, myBooks,checkShelves)  {
	let cleanBooks = books
	// console.log(myBooks)

	if (cleanBooks.length > 0) {
		for (let b1 of cleanBooks) {


			//need to fix this

			if (b1.authors && b1.authors[0]) {

			} else {
				b1.authors = ['No author listed']
			}



			if (b1.imageLinks && b1.imageLinks.thumbnail) {
				b1.coverImage=b1.imageLinks.thumbnail
			} else {
				b1.coverImage='http://www.jdtech.net/images/nocover.png'
			}
		}


		if (checkShelves) {
			// console.log(myBooks)
			for (let b1 of cleanBooks) {
				let b2 = myBooks.filter(b => b2.id === b1.id)
				if (b2) {
					b1.shelf = b2.shelf
				} else {
					b1.shelf = "none"
				}
			}
		}


		// if (checkShelves) {
		// 	console.log("check is true")
		// 	for (let b1 of cleanBooks) {
		// 		for (let b2 of myBooks) {
		// 			if (b1.id === b2.id) {
		// 				b1.shelf = b2.shelf
		// 				break
		// 			}
		// 		}
		// 		b1.shelf = "none"

		// 	}
		// }
		// return cleanBooks
	}
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



