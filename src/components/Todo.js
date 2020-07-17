import React, { Component } from "react"
import uuid from "uuid"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

export class Todo extends Component {
	render() {
		return (
			<div>
				Todo
				<TodoInput />
				<TodoList />
			</div>
		)
	}
}

export default Todo
