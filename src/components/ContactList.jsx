import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ dataList }) {
  return (
    <div>
      <h2>Contact List</h2>
      {dataList.map((elem) => (
        <ContactItem data={elem} />
      ))}
    </div>
  );
}

export default ContactList;
