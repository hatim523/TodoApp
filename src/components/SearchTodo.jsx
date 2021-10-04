import React from 'react';

function SearchTodo({ query, onQueryUpdate }) {
  return (
    <div style={{ padding: '1rem' }}>
      <input type="text" placeholder="Search todo list..." onChange={(e) => onQueryUpdate(e.target.value)} value={query} />
    </div>
  );
}

export default SearchTodo;
