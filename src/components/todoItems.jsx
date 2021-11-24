import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import TodoItem from './TodoItem';
import { fetchTodos } from '../redux/todo/asyncActions';

function TodoItems({ query }) {
  const items = useSelector((state) => state.items);

  useEffect(() => {
    store.dispatch(fetchTodos());
  }, []);

  return (
    <>
      {items.filter((elem) => elem.todo.includes(query)).map((item) => (
        <TodoItem
          todo={item.todo}
          completed={item.complete}
          key={item.id}
          id={item.id}
        />
      ))}
    </>
  );
}

export default TodoItems;
