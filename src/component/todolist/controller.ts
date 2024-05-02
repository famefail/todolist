import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, checkedTodo, deleteTodo } from "../../redux/todo/actionTodo"
import { RootState } from "../../redux/store"
import { IReducer } from "../../redux/todo/reduceTodo"

export const UseTodolistController = () => {
  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState('')
  const [description, setDescription] = useState('')
  const [selectFilter, setSelectFilter] = useState('showAll')
  const todos = useSelector((state: RootState) => state.todos)
  const [filterTodos, setFilterTodos] = useState<IReducer[]>(todos)
  const id = `${inputTodo}-${todos.length}`

  const filterDropdown = [{
    value: 'showAll',
    label: 'Show all',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'incomplete',
    label: 'Incomplete',
  }]

  const onFilterTodolist = useCallback((filter: string) => {
    if (filter === 'completed') {
      setFilterTodos(todos.filter((todo) => todo.complete === true))
    } else if (filter === 'incomplete') {
      setFilterTodos(todos.filter((todo) => todo.complete === false))
    } else {
      setFilterTodos(todos)
    }
  }, [todos, setFilterTodos])

  useEffect(() => {
    onFilterTodolist(selectFilter)
  }, [onFilterTodolist, selectFilter])


  const handleAddTodo = () => {
    if (inputTodo)
      dispatch(addTodo(inputTodo, description, id))
    setInputTodo('')
    setDescription('')
  }

  const onChangeInputTodo = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    setInputTodo(value)
  }

  const onChangeDescription = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value
    setDescription(value)
  }

  const onClickDelTodo = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const onChangeTodo = (evt: boolean, id: string) => {
    dispatch(checkedTodo(evt, id))
  }

  return {
    onChangeInputTodo,
    onClickDelTodo,
    inputTodo,
    todos,
    handleAddTodo,
    onChangeTodo,
    filterDropdown,
    setSelectFilter,
    selectFilter,
    filterTodos,
    onFilterTodolist,
    onChangeDescription,
    description
  }
}