import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Count />
        <Buttons />
    </div>
  )
}

function Count({count}) {
    return <div>
        {count}
    </div>
}

function Buttons() {
    return <div>
        <button onClick={() => {

        }}>Increase</button>

        <button onClick={() => {

        }}>Decrease</button>
    </div>
}

export default App
