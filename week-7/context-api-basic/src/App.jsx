import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from "./context.jsx";

function App() {
  const [count, setCount] = useState(0)

  return <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
  </div>
}

function Count({count, setCount}) {
    return <div>
        <CountRenderer count={count} />
        <Buttons count={count} setCount={setCount} />
    </div>
}

function CountRenderer() {
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons({count, setCount}) {
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>
    </div>
}

export default App
