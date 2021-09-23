import axios from "axios";
import { APIHost } from "../db/settings";


function addNewTodo(newTodo) {
    return axios.post(`${APIHost}todos`, newTodo);
}

function removeTodo(todoId) {
    return axios.delete(`${APIHost}todos/${todoId}`);
}

function toggleComplete(todoId, isCompleted) {
    return axios.patch(`${APIHost}todos/${todoId}`, {complete: isCompleted})
}

export {addNewTodo, removeTodo, toggleComplete};