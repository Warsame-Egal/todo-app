import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/TodoList'
import { ToDoInput } from './components/TodoInput'

function App() {
  
  const [todos, setTodos] = useState([
    {input: 'Hello! Add your first todo!', complete : true}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete : false}]
    setTodos(newTodoList)

  }


  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo =todos[index]
    completedTodo['complete'] = true 
    newTodoList[index] = completedTodo
    setTodos(newTodoList)

  }

  function handleDeleteTodo(index) {
    let newTodolist = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodolist)
  }

  return (
      <>
        <Header todos={todos} />
        <Tabs selectedTab={selectedTab} setSelectedTab = {setSelectedTab} todos={todos}/>
        <ToDoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
        <ToDoInput handleAddTodo={handleAddTodo} />

      </>


  )
}

export default App
