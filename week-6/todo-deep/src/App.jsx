import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Kept it here because anytime the state rerenders, the counter would also reset
let counter = 3;

function App() {
  const [todos, setTodos] = useState([
      {
          id: 1,
          title: 'go to gym',
          description: ' sldk'
      },
      {
          id: 2,
          title: 'go to class',
          description: ' class'
      }
  ])

    function addTodo() {
      setTodos([...todos, {
          id: counter++,
          title: Math.random(),
          description: Math.random()
      }])
    }

  return (
    <div>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(todo => {
            return <Todo key={todo.id} title={todo.title} description={todo.description} />
        })}
    </div>
  )
}

function Todo({title, description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App
