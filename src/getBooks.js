//holds the components for getting the books
//and sorting/organizing them
// also handles the moves and saves

// import React from 'react'




export function cleanUp(books)  {

		let cleanBooks = books
		// console.log(copyBooks)
		if (cleanBooks.length > 0) {


			for (let b1 of cleanBooks) {
				console.log(b1.title)
			if (!b1.authors[0]) { b1.authors = ['No author listed'] }

			if (b1.imageLinks &&  b1.imageLinks.thumbnail) {
				b1.coverImage=b1.imageLinks.thumbnail
			} else {
				b1.coverImage='http://localhost:3000/icons/nocover.png'
			}



		}
		return cleanBooks

		}
	}


export function setShelves(sBooks,myBooks) {


	for (let b1 of sBooks) {
		for (let b2 of myBooks) {
			if (b1.id === b2.id) {
				b1.shelf = b2.shelf
				break
			}
		}

	return sBooks

	}
}

// biography