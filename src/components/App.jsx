import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AddTodo from './addTodo';
import store from '../redux/store';
import TodoItems from './TodoItems';
import SearchTodo from './SearchTodo';

function App() {
  const [query, setQuery] = useState('');

  return (
    <Provider store={store}>
      <SearchTodo query={query} onQueryUpdate={setQuery} />
      <AddTodo />
      <TodoItems query={query} />
    </Provider>
  );
}

export default App;
