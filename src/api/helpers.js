import API from './api';

const addNewTodo = (newTodo) => API.post('todos', newTodo);
const removeTodo = (todoId) => API.delete(`todos/${todoId}`);
const toggleComplete = (todoId, isCompleted) => API.patch(`todos/${todoId}`, { complete: isCompleted });

export { addNewTodo, removeTodo, toggleComplete };
