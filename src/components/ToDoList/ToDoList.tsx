import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import './ToDoList.scss'
import { ToDo } from '../../models/todo-item'

export const ToDoList = (props: { todos: ToDo[]; deleteToDo: Function; updateToDo: Function }) => {
  const checkedList = (isDone: boolean) => {
    return props.todos
      .filter(item => item.isDone === isDone)
      .map((item, key) => {
        return <ToDoListItem toDoItem={item} key={key} deleteToDo={props.deleteToDo} updateToDo={props.updateToDo} />
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList(false)}</ul>
      <ul className="todo-list completed">{checkedList(true)}</ul>
    </div>
  )
}
