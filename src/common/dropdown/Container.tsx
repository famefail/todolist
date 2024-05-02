import { IDropdown } from "./interface"

interface IDropdownProps {
    dropdown: IDropdown[]
    setDropdown: React.Dispatch<React.SetStateAction<string>>
}

const Dropdown = ({ dropdown, setDropdown }: IDropdownProps) => {
    const handleChangeFilter = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const value = evt.target.value
        setDropdown(value)
    }
    return (
        <select name="dropdownContainer" id="dropdown-container" className="btn-group" data-testid="dropdown-container" onChange={handleChangeFilter}>
            {dropdown.map((option, index) => {
                const id = `${option.value}-${index}`
                return (
                    <option value={option.value} key={id}>{option.label}</option>
                )
            })}
        </select>
    )
}

export default Dropdown