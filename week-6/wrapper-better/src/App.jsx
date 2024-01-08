import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper>
          <div>hi there</div>
      </CardWrapper>
    <CardWrapper>
          <div>hello there</div>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
    return <div style={{border: "2px solid black", padding: "20"}}>
        {children}
    </div>
}

export default App
