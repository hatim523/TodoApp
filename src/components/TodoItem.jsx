import React from 'react';
import store from '../redux/store';
import '../styles/todoItems.scss';
import { removeTodoDB, toggleCompleteDB } from '../redux/todo/asyncActions';

function TodoItem({
  id, completed, todo,
}) {
  return (
    <div className={completed ? 'todo-item todo-complete' : 'todo-item'}>
      <span className="todo-text">{todo}</span>
      <button type="button" className="button todo-done" onClick={() => store.dispatch(toggleCompleteDB(id, completed))}>
        Mark
        {' '}
        {completed ? 'Undone' : 'Complete'}
      </button>
      <button type="button" className="button todo-remove" onClick={() => store.dispatch(removeTodoDB(id))}>Remove</button>
    </div>
  );
}

TodoItem.propTypes = [];

export default TodoItem;
