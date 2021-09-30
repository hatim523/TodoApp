import React from 'react';
import { Provider } from 'react-redux';
// import TodoItem from './todoItems';
import AddTodo from './addTodo';
// import API from '../api/api';
// import { addNewTodo, removeTodo, toggleComplete } from '../api/helpers';
import store from '../redux/store';
import TodoItems from './TodoItems';

function App() {
  // const onRemoveClick = (id) => {
  //   removeTodo(id)
  //     .then(() => {
  //       setItems(items.filter((elem) => elem.id !== id));
  //     });
  // };

  // const onAddTodo = (todoText) => {
  //   const newTodo = { complete: false, todo: todoText };
  //   addNewTodo(newTodo)
  //     .then((res) => {
  //       setItems([res.data, ...items]);
  //     });
  // };

  return (
    <Provider store={store}>
      <AddTodo />
      <TodoItems />
    </Provider>
  );
}

export default App;
