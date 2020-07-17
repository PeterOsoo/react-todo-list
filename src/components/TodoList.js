import React, { Component } from "react"
import TodoItem from "./TodoItem"

export class TodoList extends Component {
	render() {
		return (
			<div>
				Todo List
				<TodoItem />
			</div>
		)
	}
}

export default TodoList
