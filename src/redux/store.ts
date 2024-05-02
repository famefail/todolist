import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/reduceTodo'
export const rootReducer = combineReducers({
    todos: todoReducer,
  })
  
  const getTodolist = localStorage.getItem('todolist')
  let todolist = {}
  if (getTodolist) {
    todolist = JSON.parse(getTodolist)
  }

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: todolist,
  })
  
  store.subscribe(() => {
    localStorage.setItem('todolist', JSON.stringify(store.getState()))
  })

  export default store
  
  export type RootState = ReturnType<typeof rootReducer>