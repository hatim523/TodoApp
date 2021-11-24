import React, { useState } from 'react';
import TodoItems from './TodoItems';
import SearchTodo from './SearchTodo';
import AddTodo from './addTodo';

function Todo() {
  const [query, setQuery] = useState('');
  return (
    <div>
      <SearchTodo query={query} onQueryUpdate={setQuery} />
      <AddTodo />
      <TodoItems query={query} />
    </div>
  );
}

export default Todo;
