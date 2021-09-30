import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './addTodo';
import store from '../redux/store';
import TodoItems from './TodoItems';

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoItems />
    </Provider>
  );
}

export default App;
