import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: 'Go to gym',
    //         description: 'Gym desc'
    //     }
    // ])

    const [selectedId, setSelectedId] = useState(1);

    // Every 10 seconds the todos should be updated
    // Note: cannot use async await syntax in useEffect for parent function. useAsyncEffect can be used instead
    useEffect(() => {
        // setInterval(() => {
            fetch('https://sum-server.100xdevs.com/todos')
                .then(async (res) => {
                    const todosTemp = await res.json();
                    setTodos(todosTemp.todos)
                })
        // }, 10000)
    }, []);

    return (
        // <div>
            //{todos.map(todo => {
            //    return <Todo key={todo.id} title={todo.title} description={todo.description} />
          //  })}
       // {/*</div>*/}


        // <div>
        //      To show todo details by passing id
        //     <TodoDetail id={5} />
        // </div>


        <div>
            <button onClick={function() {setSelectedId(1)}}>1</button>
            <button onClick={function() {setSelectedId(2)}}>2</button>
            <TodoDetail id={selectedId} />
        </div>
    )
}

function Todo({title, description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

function TodoDetail({id}) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch('https://sum-server.100xdevs.com/todo?id=' + id)
            .then(async (res) => {
                const todoTemp = await res.json();
                setTodo(todoTemp.todo)
            })
    }, [id])

    return <Todo title={todo.title} description={todo.description} />
}

export default App
