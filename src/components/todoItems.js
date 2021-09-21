import '../styles/todoItems.css';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <span className="todo-text">{props.todo}</span>
            <button className="button todo-done">Mark {props.completed ? 'Undone' : 'Complete'}</button>
            <button className="button todo-remove">Remove</button>
        </div>
    );
}

export default TodoItem;