import { fireEvent, render } from "@testing-library/react"
import Dropdown from "../../../common/dropdown/Container"
import "@testing-library/jest-dom"
// Mock dropdown data
const dropdownData = [
  { value: 'value1', label: 'Label 1' },
  { value: 'value2', label: 'Label 2' },
  { value: 'value3', label: 'Label 3' },
]

describe('Dropdown', () => {
  test('dropdown with options', () => {
    const { getByTestId, getByText } = render(
      <Dropdown dropdown={dropdownData} setDropdown={() => {}} />
    )

    const dropdownElement = getByTestId('dropdown-container')
    expect(dropdownElement).toBeInTheDocument()

    dropdownData.forEach(option => {
      const optionElement = getByText(option.label)
      expect(optionElement).toBeInTheDocument()
    })
  })

  test('setDropdown', () => {
    const setDropdownMock = jest.fn()
    const { getByTestId } = render(
      <Dropdown dropdown={dropdownData} setDropdown={setDropdownMock} />
    )
    const dropdownElement = getByTestId('dropdown-container')
    fireEvent.change(dropdownElement, { target: { value: 'value2' } })
    expect(setDropdownMock).toHaveBeenCalledWith('value2')
  })
})
