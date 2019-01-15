import React, { Component } from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import DisplayBook from './books.js'

class ListBooks extends Component {
	static propTypes = {
	    books: PropTypes.array.isRequired,
	    shelf: PropTypes.string.isRequired,
	    onChangeShelf: PropTypes.func.isRequired
  	}

//refactor as stateless component
//   	const MyComponent = ({ myProp }) => {
//   return <h1>{myProp} </h1>;
// };

// MyComponent.propTypes = {
//   myProp: PropTypes.string
// };

	render() {

		const {books, shelf, onChangeShelf}=this.props
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
}

export default ListBooks