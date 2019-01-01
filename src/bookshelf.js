import React, { Component } from 'react';
// import * as BooksAPI from './utils/BooksAPI.js'

// this component will render the book shelves
// it's main function is to retrieve the books
// and display the three shelves.

class ListBooks extends Component {

	// local state will be the three shelves

	state = {
		currentlyReading: [],
		read: [],
		wantToRead: []
	}

	// function to create/set/update reading shelf
	updateList = (books,shelfName) => {
		// this.setState({reading: books.filter((b)  => b.shelf === 'shelfName' )})
		this.setState({shelfName: books})

	}




	onChangerClick() {
    //show menu
  }



	render()  {
		const {books, shelfName}=this.props
		let booksOnShelf

		//how about passing books once with an array of shelfnames nad
		//the functions to match state change.
		//then in the next function - set local stat for all the shelves.
		//don't need to pass the functions - they live here



		if (shelfName) {
			// this.updateReading(books,shelfName)
			// booksOnShelf = this.state.reading
			booksOnShelf = books.filter((b) => b.shelf === shelfName )


			// console.log(booksOnShelf)
			// console.log(books)
			// console.log(shelfName)
			// books.map((b) => (
			// 	console.log(b.shelf, "===", shelfName)
			// 	) )
		}

		return (
			<div className='books-grid'>

					 {booksOnShelf.map((book) => (
					<div className='book' key={book.id}>

						<div className='book-top test '>
							<img className='book-cover' src= {book.imageLinks.thumbnail} alt=''/>
							<button className='book-shelf-changer  ' > </button>
							<div className='dropdown-content'>
								<a>Already Read</a>
								<a>Want to Read</a>
								<a>Reading</a>
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
}  //ShowReading








// class ListBooks extends Component {

// state = {
//       books: [],
//       read: [],
//       toRead: [],
//       reading: []
//   }

//   	componentDidMount() {
// 	    BooksAPI.getAll().then((books) =>
// 	      this.setState((state, books) =>({
			// reading: books.filter((b) => b.shelf === 'reading'),
			// toRead: books.filter((b) => b.shelf === 'wantToRead'),
			// read: books.filter((b) => b.shelf === 'read')
			// }))
// 	    )
// 	}

//     //create another function here to set the state of the three shelves




// 	// render() {

// 	// 	return()

// 	// }


// }

export default ListBooks