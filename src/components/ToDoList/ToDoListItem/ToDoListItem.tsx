import './ToDoListItem.scss'
export const ToDoListItem = () => {
  return (
    <li className="todo-list-item__wrapper">
      <span>Первая задача</span>
      <div className="todo-list-item__buttons">
        <button type="button" className="btn-trash" title="trash"></button>
        <button type="button" className="btn-check" title="check"></button>
      </div>
    </li>
  )
}
