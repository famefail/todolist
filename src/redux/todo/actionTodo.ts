import { typeTodo } from "./typeTodo"

export const addTodo = (value: string, description: string, id: string) => {
	return {
		type: typeTodo.ADD_TODO,
		payload: {
			id: id,
			newTodo: value,
			description: description,
		}
	}
}

export const deleteTodo = (id: string) => {
	return {
		type: typeTodo.DELETE_TODO,
		payload: {
			id: id
		}
	}
}

export const checkedTodo = (checked: boolean, id: string) => {
	return {
		type: typeTodo.CHECKED_TODO,
		payload: {
			id: id,
			complete: checked,
		}
	}
}