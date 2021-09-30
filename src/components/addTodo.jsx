import { React, useState } from 'react';
import store from '../redux/store';
import { addTodoDB } from '../redux/todo/asyncActions';

function AddTodo() {
  const [inputTodo, setInputTodo] = useState('');

  return (
    <div>
      <input type="text" value={inputTodo} onInput={(e) => setInputTodo(e.target.value)} />
      <button type="button" className="button" onClick={() => store.dispatch(addTodoDB(inputTodo))}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
