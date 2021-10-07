import React, { useContext } from 'react';
import ContactContext from '../redux/contact/contactContext';
import ContactItem from './ContactItem';
import { removeContactDB } from '../redux/contact/apiActions';

function ContactList({ dataList }) {
  const contactContext = useContext(ContactContext);
  return (
    <div>
      <h2>Contact List</h2>
      {dataList.map((elem) => (
        <>
          <ContactItem key={elem.id} data={elem} />
          <button
            key={`button_${elem.id}`}
            type="button"
            onClick={() => removeContactDB(contactContext.contactDispatch, elem.id)}
          >
            {contactContext.contactState.loading ? 'Deleting' : 'Remove Contact'}
          </button>
        </>
      ))}
    </div>
  );
}

export default ContactList;
