import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/TodoList'
import { ToDoInput } from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)
  const todos = [
    {input: 'Hello! Add your first todo!', complete : true},
    {input: 'Practice daily leetcode!', complete: false },
    {input: 'Study System Design!', complete: false},
    {input: 'Go to the gym!', complete: true }

  ] 

  return (
      <>
        <Header todos={todos} />
        <Tabs todos={todos} />
        <ToDoList todos={todos} />
        <ToDoInput todos={todos} />

      </>


  )
}

export default App
