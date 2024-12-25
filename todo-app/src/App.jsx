import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/TodoList'
import { ToDoInput } from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)
  let x = 3
  return (
      <div>
        <Header />
        <Tabs />
        <ToDoList />
        <ToDoInput />




      </div>


  )
}

export default App
