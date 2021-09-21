import React from 'react';
import TodoItem from './todoItems';
import AddTodo from './addTodo'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {todo: "Example Text", complete: false},
                {todo: "Text 2", complete: true},
            ],
        };
    }

    onCompleteClick(index) {
        const items = this.state.items.slice();
        const toggleItem = items[index];

        toggleItem['complete'] = !toggleItem['complete'];
        items[index] = toggleItem;
        this.setState({
            items: items,
        })
    }

    onRemoveClick(index) {
        this.setState({
            items: this.state.items.filter((elem, i) => i !== index)
        })
    }

    onAddTodo(todoText) {
        const newTodo = {complete: false, todo: todoText}
        this.setState({
            items: [newTodo, ...this.state.items]
        })
    }

    render() {
        return (
            <>
            <AddTodo onAdd={(todoText) => this.onAddTodo(todoText)}/>
            {this.state.items.map((item, index) => {
                return <TodoItem 
                    todo={item.todo} 
                    completed={item.complete} 
                    key={index} 
                    id={index} 
                    onCompleteClick={(i) => this.onCompleteClick(i)}
                    onRemoveClick={(i) => this.onRemoveClick(i)}
                    />
            })}
            </>
        )
    }
}
