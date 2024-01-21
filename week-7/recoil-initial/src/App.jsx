import './App.css'
import {countAtom} from "./store/atoms/count.jsx";
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

function App() {
  return <RecoilRoot>
    <Count />
  </RecoilRoot>
}

function Count() {
    return <div>
        <CountRenderer />
        <Buttons />
        <EvenText />
    </div>
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return <div>
        {count}
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);

    return <div>
        <button onClick={() => {
            setCount((count) => count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount((count) => count - 1)
        }}>Decrease</button>
    </div>
}

function EvenText() {
    const count = useRecoilValue(countAtom);

    return <p>
        {count % 2 === 0 ? 'Even' : ''}
    </p>
}

export default App
