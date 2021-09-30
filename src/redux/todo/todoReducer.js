import {
  ADD_TODO, LOAD_TODOS, REMOVE_TODO, TOGGLE_COMPLETE,
} from './todoTypes';

const initialState = {
  items: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        items: action.todoItems,
      };
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items,
          {
            id: action.todoItem.id,
            todo: action.todoItem.todo,
            complete: action.todoItem.complete,
          },
        ],
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.todoID
          ? { id: item.id, todo: item.todo, complete: !item.complete } : item)),
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter((elem) => elem.id !== action.todoID),
      };
    default:
      return state;
  }
};

export default todoReducer;
