import { Provider } from 'react-redux'
import { UseTodolistController } from '../../../component/todolist/controller'
import { renderHook } from '@testing-library/react'
import { act } from 'react'
import store from '../../../redux/store'

describe('UseTodolistController', () => {
  test('init', () => {
    const { result } = renderHook(() => UseTodolistController(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })

    expect(result.current.inputTodo).toEqual('')
    expect(result.current.selectFilter).toEqual('showAll')
    expect(result.current.todos).toEqual([])
    expect(result.current.filterTodos).toEqual([])
  })

  test('add a todo', () => {
    const { result } = renderHook(() => UseTodolistController(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    })
    const mock = { target: { value: 'New Todo' } } as React.ChangeEvent<HTMLInputElement>
  
    act(() => {
      result.current.onChangeInputTodo(mock)
      result.current.handleAddTodo()
    })

    expect(result.current.inputTodo).toEqual('')
  })
})
