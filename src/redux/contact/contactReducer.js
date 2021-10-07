import {
  ADD_CONTACT, FETCH_REQUEST, LOAD_CONTACTS, REMOVE_CONTACT, REQUEST_FAILED, REQUEST_SUCCESS,
} from './contactTypes';

const contactsInitialState = {
  contacts: [],
  loading: false,
  error: '',
};

const contactReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((elem) => elem.id !== action.id),
      };

    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default contactReducer;
export { contactsInitialState };
