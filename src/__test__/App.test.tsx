import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../redux/store"
import App from "../App"
import "@testing-library/jest-dom"

describe('app', () => {
  test('container', () => {
    const { container, getByText, getByRole } = render(<Provider store={store}> <App /></Provider >)
    expect(getByText('Todolist')).toBeInTheDocument()
    expect(getByRole('button', { name: 'add' })).toBeInTheDocument()
    expect(getByRole('combobox')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})