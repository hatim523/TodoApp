import {
  ADD_TODO, ERROR, LOAD_TODOS, REMOVE_TODO, TOGGLE_COMPLETE,
} from './todoTypes';

export const loadTodos = (todoItems) => ({
  type: LOAD_TODOS,
  todoItems,
});

export const addTodo = (todoItem) => ({
  type: ADD_TODO,
  todoItem,
});

export const toggleCompleteAction = (todoID, isComplete) => ({
  type: TOGGLE_COMPLETE,
  todoID,
  isComplete,
});

export const removeTodoAction = (todoID) => ({
  type: REMOVE_TODO,
  todoID,
});

export const errorAction = (errorMsg) => ({
  type: ERROR,
  error: errorMsg,
});
