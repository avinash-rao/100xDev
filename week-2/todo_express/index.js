const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todo = {
        id: new Date().getTime().toString(),
        title: req.body.title,
        completed: req.body.completed || false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

app.put("todos/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
        return res.status(404).json({error: "Todo not found"});
    }
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed || todo.completed;
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404).json({error: "Todo not found"});
    }
    todos.splice(index, 1);
    res.status(204).send();
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});