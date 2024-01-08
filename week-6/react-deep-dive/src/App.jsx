import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState('Avinash')

    function updateTitle() {
        setTitle('My name is ' + Math.random());
    }

  return (
    <>
        {/* Pushing the state down to HeaderWithButton component so other Header components don't rerender on state change */}
        <HeaderWithButton/>
      <Header title='Test1'></Header>
      <Header title='Test2'></Header>
      <Header title='Test3'></Header>
    </>
  )
}

function HeaderWithButton() {
    const [title, setTitle] = useState('my name is avinash');
    function updateTitle() {
        setTitle('my name is ' + Math.random());
    }
    return <>
        <button onClick={updateTitle}>Update</button>
        <Header title={title}></Header>
    </>
}

function Header({title}) {
    console.log('rendered');
    return <div>
        {title}
    </div>
}

export default App
