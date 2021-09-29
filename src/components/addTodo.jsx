import { React, useState } from 'react';

function AddTodo(props) {
  const [inputTodo, setInputTodo] = useState('');

  return (
    <div>
      <input type="text" value={inputTodo} onInput={(e) => setInputTodo(e.target.value)} />
      <button type="button" className="button" onClick={() => props.onAdd(inputTodo)}>Add Todo</button>
    </div>
  );
}

AddTodo.propTypes = [];

export default AddTodo;
