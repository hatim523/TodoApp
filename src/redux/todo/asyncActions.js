import API from '../../api/api';
import {
  addTodo, loadTodos, toggleCompleteAction, removeTodoAction, errorAction,
} from './todoActions';
import { toggleComplete, removeTodo, addNewTodo } from '../../api/helpers';

const fetchTodos = () => function (dispatch) {
  API.get('todos/')
    .then((response) => {
      dispatch(loadTodos(response.data));
    })
    .catch((error) => {
      dispatch(errorAction(error.message));
    });
};

const addTodoDB = (todoText) => function (dispatch) {
  const newTodo = { complete: false, todo: todoText };
  addNewTodo(newTodo)
    .then((response) => {
      dispatch(addTodo(response.data));
    });
};

const toggleCompleteDB = (todoId, isComplete) => function (dispatch) {
  toggleComplete(todoId, !isComplete)
    .then(() => {
      dispatch(toggleCompleteAction(todoId, !isComplete));
    });
};

const removeTodoDB = (todoId) => function (dispatch) {
  removeTodo(todoId)
    .then(() => {
      dispatch(removeTodoAction(todoId));
    });
};

export {
  fetchTodos, addTodoDB, toggleCompleteDB, removeTodoDB,
};
