import { ToDo } from '../../../models/todo-item'
import './ToDoListItem.scss'

export const ToDoListItem = (props: { toDoItem: ToDo; deleteToDo: Function; updateToDo: Function }) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          type="button"
          className="btn-trash"
          title="trash"
          onClick={() => props.deleteToDo(props.toDoItem)}></button>
        <button
          type="button"
          className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}
          title="check"
          onClick={() => props.updateToDo(props.toDoItem)}></button>
      </div>
    </li>
  )
}
