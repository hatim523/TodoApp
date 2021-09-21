import { useState } from "react";

function AddTodo(props) {
    const [inputTodo, setInputTodo] = useState('');

    return (
        <div>
            <input type='text' value={inputTodo} onInput={e => setInputTodo(e.target.value)}></input>
            <button className="button" onClick={() => props.onAdd(inputTodo)}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
