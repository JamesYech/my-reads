import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
	static propTypes = {
	    book: PropTypes.object.isRequired,
	    menu: PropTypes.array.isRequired,
	    onMove: PropTypes.func.isRequired
  	}

	state ={showMenu: false}

	clickChanger = () => {
     	this.state.showMenu ? this.setState({showMenu:false}) : this.setState({showMenu:true})
	}

	render() {
		const {book, menu, onMove}=this.props

		let optBlock = menu.map(opt => (
			opt.id !== book.shelf
				? <option key={opt.id} value={opt.id}> {opt.name} </option>
				:	<option key={opt.id} value={opt.id} disabled> {opt.name} </option>
		))

		return (
			<div >
				<button className='book-shelf-changer'>
					<select	onChange={(event) => onMove(book, event.target.value)}>
						<option> Move to...</option>
						{optBlock}
					</select>
				</button>
			</div>
		)
	}
}

export default ShelfChanger