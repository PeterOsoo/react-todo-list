import React, { Component } from "react"
import uuid from "uuid"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

class Todo extends Component {
	state = {
		items: [],
		id: 0,
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
						<TodoList />
					</div>
				</div>
				<div className="jumbotron">Todo</div>
			</div>
		)
	}
}

export default Todo
