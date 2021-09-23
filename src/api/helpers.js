import API from './api';

function addNewTodo(newTodo) {
  return API.post('todos', newTodo);
}

function removeTodo(todoId) {
  return API.delete(`todos/${todoId}`);
}

function toggleComplete(todoId, isCompleted) {
  return API.patch(`todos/${todoId}`, { complete: isCompleted });
}

export { addNewTodo, removeTodo, toggleComplete };
