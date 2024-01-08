import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  )
}

function TextComponent() {
    return <div>
        hi there
    </div>
}

function CardWrapper({innerComponent}) {
    return <div style={{border: "2px solid black"}}>
        {innerComponent}
    </div>
}

export default App
