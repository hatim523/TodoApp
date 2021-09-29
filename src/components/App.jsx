import React, { useEffect, useState } from 'react';
import TodoItem from './todoItems';
import AddTodo from './addTodo';
import API from '../api/api';
import { addNewTodo, removeTodo, toggleComplete } from '../api/helpers';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items) {
      API.get('todos/')
        .then((res) => {
          setItems(res.data);
        });
    }
  }, []);

  const onCompleteClick = (id) => {
    const itemsCopy = items.slice();
    let itemIndex;
    itemsCopy.map((elem, i) => {
      if (elem.id === id) { itemIndex = i; }
      return itemIndex;
    });

    const toggleItem = itemsCopy[itemIndex];
    toggleItem.complete = !toggleItem.complete;
    toggleComplete(id, toggleItem.complete)
      .then(() => {
        itemsCopy[itemIndex] = toggleItem;
        setItems(itemsCopy);
      });
  };

  const onRemoveClick = (id) => {
    removeTodo(id)
      .then(() => {
        setItems(items.filter((elem) => elem.id !== id));
      });
  };

  const onAddTodo = (todoText) => {
    const newTodo = { complete: false, todo: todoText };
    addNewTodo(newTodo)
      .then((res) => {
        setItems([res.data, ...items]);
      });
  };

  return (
    <>
      <AddTodo onAdd={(todoText) => onAddTodo(todoText)} />
      {items.map((item) => (
        <TodoItem
          todo={item.todo}
          completed={item.complete}
          key={item.id}
          id={item.id}
          onCompleteClick={(i) => onCompleteClick(i)}
          onRemoveClick={(i) => onRemoveClick(i)}
        />
      ))}
    </>
  );
}

export default App;
