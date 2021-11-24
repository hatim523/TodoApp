import {
  ADD_CONTACT, FETCH_REQUEST, LOAD_CONTACTS, REMOVE_CONTACT, REQUEST_FAILED, REQUEST_SUCCESS,
} from './contactTypes';

export const loadContacts = (contacts) => ({
  type: LOAD_CONTACTS,
  payload: contacts,
});

export const addContact = ({
  id, name, address, phone, picture,
}) => ({
  type: ADD_CONTACT,
  payload: {
    id,
    name,
    address,
    phone,
    picture,
  },
});

export const removeContact = (contactID) => ({
  type: REMOVE_CONTACT,
  id: contactID,
});

export const requestFailed = (errorMessage) => ({
  type: REQUEST_FAILED,
  error: errorMessage,
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS,
});

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});
