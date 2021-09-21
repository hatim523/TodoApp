import '../styles/todoItems.css';

function TodoItem(props) {
    return (
        <div className={props.completed ? 'todo-item todo-complete' : 'todo-item'}>
            <span className="todo-text">{props.todo}</span>
            <button className="button todo-done" onClick={() => props.onCompleteClick(props.id)}>Mark {props.completed ? 'Undone' : 'Complete'}</button>
            <button className="button todo-remove" onClick={() => props.onRemoveClick(props.id)}>Remove</button>
        </div>
    );
}

export default TodoItem;