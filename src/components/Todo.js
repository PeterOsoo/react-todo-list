import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"
// import uuid from "uuid"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

class Todo extends Component {
	state = {
		items: [],
		id: uuidv4(),
		item: "",
		editItem: false,
	}

	handleChange = e => {
		this.setState({
			item: e.target.value,
		})
	}

	handleSubmit = e => {
		e.preventDefault()

		const newItem = {
			id: this.state.id,
			title: this.state.item,
		}
		// console.log(newItem)

		const updatedItems = [...this.state.items, newItem]
		this.setState({
			items: updatedItems,
			item: "",
			id: uuidv4(),
			editItem: false,
		})
	}
	clearList = () => {
		this.setState({
			items: [],
		})
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">Todo Input</h3>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<TodoList items={this.state.items} clearList={this.clearList} />
					</div>
				</div>
				<div className="jumbotron">Todo</div>
			</div>
		)
	}
}

export default Todo
