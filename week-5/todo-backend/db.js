/**
 * Todo {
 *     title: string;
 *     description: string;
 *     completed: string;
 * }
 */

const mongoose = require('mongoose');

// mongodb+srv://Cluster21172:SE8r7r7pkaFMBLnC@cluster21172.css5ukv.mongodb.net/todos?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://Cluster21172:SE8r7r7pkaFMBLnC@cluster21172.css5ukv.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}