import API from '../../api/api';
import {
  addContact,
  fetchRequest, loadContacts, requestFailed, requestSuccess,
} from './contactActions';

export const fetchAllContacts = (dispatch) => {
  dispatch(fetchRequest());
  API.get('contacts/')
    .then((response) => {
      console.log(response.data);
      dispatch(requestSuccess());
      dispatch(loadContacts(response.data));
    })
    .catch((error) => {
      dispatch(requestFailed());
      dispatch(requestFailed(error.message));
    });
};

export const addNewContact = (newContact) => function (dispatch) {
  dispatch(fetchRequest());
  API.post('contacts/', newContact)
    .then((response) => {
      dispatch(requestSuccess());
      dispatch(addContact(response.data));
    })
    .catch((error) => {
      dispatch(requestFailed(error.message));
    });
};
