import Dropdown from "../../common/dropdown/Container"
import { UseTodolistController } from "./controller"

const Todolist = () => {
  const {
    onChangeInputTodo,
    onClickDelTodo,
    inputTodo,
    handleAddTodo,
    onChangeTodo,
    filterDropdown,
    setSelectFilter,
    filterTodos,
    onChangeDescription,
    description
  } = UseTodolistController()
  return (
    <div data-testid="todolist-container" className="todolist-container">
      <header className="todolist-header"><h1 className="text-amber-400">Todolist</h1>
        <input value={inputTodo} onChange={onChangeInputTodo} className="form-control" />
        <div className="todo-textarea-container m-2">
          <textarea className="form-control" value={description} onChange={onChangeDescription} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        </div>
        <button className="btn btn-primary m-5" onClick={handleAddTodo}>add</button>
      </header>
      <div className="todolist-dropdown-container m-2" >
        <Dropdown dropdown={filterDropdown} setDropdown={setSelectFilter} />
      </div>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col" className="align-middle text-center">No.</th>
            <th scope="col">Todo Name</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">Complete</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterTodos.map((todolist, index) => {
            const key = `${todolist.todo}-${index}`
            return (<tr key={key}>
              <th scope="row" className="align-middle text-center">{index + 1}</th>
              <td className="align-middle text-wrap text-break">{todolist.todo}</td>
              <td className="align-middle text-wrap text-break">{todolist.description}</td>
              <td className="align-middle text-center">
                <input type="checkbox" className="checkbox-complete align-middle" onChange={(v) => onChangeTodo(v.target.checked, todolist.id)} checked={todolist.complete} />
              </td>
              <td className="align-middle text-center">
                <button className="btn btn-danger align-middle  text-center" onClick={() => onClickDelTodo(todolist.id)}>Delete</button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Todolist