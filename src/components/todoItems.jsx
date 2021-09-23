import React from 'react';
import '../styles/todoItems.css';

function TodoItem({
  id, completed, todo, onCompleteClick, onRemoveClick,
}) {
  return (
    <div className={completed ? 'todo-item todo-complete' : 'todo-item'}>
      <span className="todo-text">{todo}</span>
      <button type="button" className="button todo-done" onClick={() => onCompleteClick(id)}>
        Mark
        {' '}
        {completed ? 'Undone' : 'Complete'}
      </button>
      <button type="button" className="button todo-remove" onClick={() => onRemoveClick(id)}>Remove</button>
    </div>
  );
}

TodoItem.propTypes = [];

export default TodoItem;
