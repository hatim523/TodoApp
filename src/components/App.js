import React from 'react';
import TodoItem from './todoItems';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {todo: "Example Text", complete: false, id: 1},
                {todo: "Text 2", complete: true, id: 2},
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

    render() {
        return (
            <>
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