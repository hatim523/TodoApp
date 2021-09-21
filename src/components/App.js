import React from 'react';
import TodoItem from './todoItems';

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
        
    }

    render() {
        return (
            <>
            {this.state.items.map((item, index) => {
                return <TodoItem todo={item.todo} completed={item.complete} id={index} />
            })}
            </>
        )
    }
}