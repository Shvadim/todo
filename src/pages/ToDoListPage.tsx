import { useState } from 'react'
import { Form } from '../components/Form/Form'
import { Header } from '../components/Header/Header'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todo-item'

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      id: 0,
      text: 'Первая задача',
      isDone: false
    },
    {
      id: 1,
      text: 'Вторая задача',
      isDone: true
    },
    {
      id: 2,
      text: 'Третья задача',
      isDone: true
    }
  ])

  const createNewToDo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newToDo])
  }

  const deleteToDo = (todoItem: ToDo) => {
    const newTodos = todos.filter(item => item.id !== todoItem.id)
    setTodos(newTodos)
  }

  const updateToDo = (todoItem: ToDo) => {
    const newTodos = todos.map(item => {
      if (item.id === todoItem.id) {
        item.isDone = !item.isDone
      }
      return item
    })
    setTodos(newTodos)
  }
  return (
    <>
      <Header />
      <Form createNewToDo={createNewToDo} />
      <ToDoList todos={todos} deleteToDo={deleteToDo} updateToDo={updateToDo} />
    </>
  )
}
