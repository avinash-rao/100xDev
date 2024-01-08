
// modern way to expose functions is using export keyword before them
import {useState} from "react";

export function CreateTodo() {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="title"/> <br/>
        <input type="text" placeholder="description"/> <br/>

        <button>Add a todo</button>
    </div>
}
