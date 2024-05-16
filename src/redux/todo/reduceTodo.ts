
import { Reducer } from 'redux'
import { ActionTodo, typeTodo } from './typeTodo'

export interface IReducer {
  id: string
  todo: string
  date: string
  description?: string
  complete: boolean
}

const todoReducer: Reducer<IReducer[], ActionTodo> = (state = [], action) => {
  switch (action.type) {
    case typeTodo.ADD_TODO:
      return [...state, { id: action.payload.id, todo: action.payload.newTodo, description: action.payload.description, complete: false, date: action.payload.date }]
    case typeTodo.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id)
    case typeTodo.CHECKED_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, complete: action.payload.complete } : todo
      )
    default:
      return state
  }
}

export default todoReducer
