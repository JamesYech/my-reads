import React, { Component } from 'react';

import DisplayBook from './books.js'

import sortBy from 'sort-by'


class ListBooks extends Component {


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

		) //return
	} //render
}  //class



export default ListBooks