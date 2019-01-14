// Helper functions

//Identify and reset missing titles,
//authors, and cover images
//
//Compares search returns to myReads collection
//and set shelves accordingly
export function cleanUp(books, myBooks,checkShelves)  {
	let cleanBooks = books
	console.log('cleanupTop')
	if (cleanBooks.length > 0) {
		console.log('cleanup')
		for (let b1 of cleanBooks) {
			console.log(b1.title + "-" + b1.authors)
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
			for (let b1 of cleanBooks) {
				for (let b2 of myBooks) {
					if (b1.id === b2.id) {
						b1.shelf = b2.shelf
						console.log(b1.shelf+"=="+b2.shelf)
						break
					}
				}

			}
		}
		return cleanBooks
	}
}