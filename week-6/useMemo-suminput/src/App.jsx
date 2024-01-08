import {useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);


    // On rerendering, this expensive operation runs even though there is no change in inputValue
    // Therefore, have it inside useMemo
    // let count = 0;
    // for (let i = 0; i <= inputValue; i++) {
    //     count = count + i;
    // }

    let count = useMemo(() => {
        let count = 0;
        for (let i = 0; i <= inputValue; i++) {
            count = count + i;
        }
        return count;
    }, [inputValue])

    return (
        <div>
            <input onChange={function(e) {
                setInputValue(e.target.value);
            }} placeholder={"Find sum from 1 to n"}></input>
            <br />

            <p>Sum from 1 to {inputValue} is {count}</p>
            <button onClick={() => {setCounter(counter+1)}}>Counter ({counter})</button>
        </div>
    )
}

export default App
