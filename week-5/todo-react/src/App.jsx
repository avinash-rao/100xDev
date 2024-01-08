import './App.css'
import {CreateTodo} from "./components/CreateTodo.jsx";
import {Todos} from "./components/Todos.jsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([]);

    return <div>
        <CreateTodo />
        <Todos todos={[
            {
                title:'heleo',
                description: 'yea',
                completed: false
            }
        ]} />
    </div>
}

export default App
