import React, { useContext, useEffect } from 'react';
import { fetchAllContacts } from '../redux/contact/apiActions';
import ContactContext from '../redux/contact/contactContext';
import AddContact from './AddContact';
import ContactList from './ContactList';

function Contact() {
  const contactContext = useContext(ContactContext);

  useEffect(() => {
    fetchAllContacts(contactContext.contactDispatch);
  }, []);

  return (
    <>
      <AddContact />
      {contactContext.contactState.loading ? 'Fetching data' : <ContactList dataList={contactContext.contactState.contacts} /> }
    </>
  );
}

export default Contact;
