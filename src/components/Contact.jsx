import React, { useContext, useEffect } from 'react';
import { fetchAllContacts } from '../redux/contact/apiActions';
import ContactContext from '../redux/contact/contactContext';
import ContactList from './ContactList';

function Contact() {
  const contactContext = useContext(ContactContext);
  console.log(contactContext.contactState);

  useEffect(() => {
    fetchAllContacts(contactContext.contactDispatch);
  }, []);

  return (
    <>
      {contactContext.contactState.loading ? 'Fetching data' : <ContactList dataList={contactContext.contactState.contacts} /> }
    </>
  );
}

export default Contact;
