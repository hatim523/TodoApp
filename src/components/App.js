import React from 'react';
import axios from 'axios'
import TodoItem from './todoItems';
import AddTodo from './addTodo'
import { APIHost } from '../db/settings';
import { addNewTodo, removeTodo, toggleComplete } from '../api/helpers';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        axios.get(`${APIHost}todos/`)
            .then(res => {
                this.setState({
                    items: res.data
                });
            });
    }

    onCompleteClick(id) {
        const items = this.state.items.slice();
        let item_index;
        items.map((elem, i) => {
            if (elem['id'] === id)
                item_index = i;
        })

        const toggleItem = items[item_index];
        toggleItem['complete'] = !toggleItem['complete'];
        toggleComplete(id, toggleItem['complete'])
            .then(res => {
                items[item_index] = toggleItem;
                this.setState({
                    items: items,
                })
            })
    }

    onRemoveClick(id) {
        removeTodo(id)
            .then(res => {
                this.setState({
                    items: this.state.items.filter((elem, i) => elem['id'] !== id)
                })
            })
    }

    onAddTodo(todoText) {
        const newTodo = {complete: false, todo: todoText}
        addNewTodo(newTodo)
            .then(res => {
                this.setState({
                    items: [res.data, ...this.state.items]
                })
            });
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
                    id={item.id} 
                    onCompleteClick={(i) => this.onCompleteClick(i)}
                    onRemoveClick={(i) => this.onRemoveClick(i)}
                    />
            })}
            </>
        )
    }
}
