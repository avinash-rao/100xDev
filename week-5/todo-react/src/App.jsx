import './App.css'
import {CreateTodo} from "./components/CreateTodo.jsx";
import {Todos} from "./components/Todos.jsx";

function App() {
    const [todos, setTodos] = setState()
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
