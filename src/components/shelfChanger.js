import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = props => {

	const {book, menu, onMove}=props
	let optBlock = menu.map(opt => (
		<option key={opt.id} value={opt.id} > {opt.name} </option>
	))

	return (
		<div >
			<button className='book-shelf-changer'>
				<select onChange={(event) => onMove(book, event.target.value)}  defaultValue={book.shelf}>
					<option> Move to...</option>
					{optBlock}
				</select>
			</button>
		</div>
	)
}

ShelfChanger.propTypes = {
	book: PropTypes.object.isRequired,
	menu: PropTypes.array.isRequired,
	onMove: PropTypes.func.isRequired
}

export default ShelfChanger