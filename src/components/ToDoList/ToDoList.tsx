import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import './ToDoList.scss'
export const ToDoList = () => {
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        <ToDoListItem />
      </ul>
      <ul className="todo-list completed">
        <ToDoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button type="button" className="btn-trash" title="trash"></button>
            <button type="button" className="btn-uncheck" title="uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  )
}
