
// using object destructuring to take props
export function Todos({todos}) {
    return <div>
        {todos.map((todo) => {
            // You need to have a one parent div that will be returned
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed === true ? 'Completed' : 'Mark as completed'}</button>
            </div>
        })}
    </div>
}