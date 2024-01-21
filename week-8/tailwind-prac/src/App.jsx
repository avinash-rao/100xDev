import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RevenueCard} from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-4">
        <RevenueCard title={'Next Payout'} amount={5000} orderCount={50}></RevenueCard>
      </div>

        {/*<div className="grid grid-cols-1 md:grid-cols-3">*/}
        {/*    <div className="bg-red-500">hi there 1</div>*/}
        {/*    <div className="bg-blue-500">hi there 2</div>*/}
        {/*    <div className="bg-green-500">hi there 3</div>*/}
        {/*</div>*/}
    </>
  )
}

export default App
