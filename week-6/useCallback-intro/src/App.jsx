import {memo, useCallback, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(callback, deps) {
  const [count, setCount] = useState(0)

    const onclickcallback = useCallback(() => {
        console.log('child clicked');
    }, [])

  return (
    <div>
        <ButtonComponent callback={onclickcallback} />

        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

const ButtonComponent = memo(({callback}) => {
    console.log('Child render');
    return <div>
        <button onClick={callback}>Click Me</button>
    </div>
})

export default App
