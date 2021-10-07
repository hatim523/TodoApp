import React from 'react';
import { contactsInitialState } from './contactReducer';

const ContactContext = React.createContext(contactsInitialState);

export default ContactContext;
