import React from 'react';
import store from '../redux/store';

const TodoContext = React.createContext(store.getState().items);

export default TodoContext;
