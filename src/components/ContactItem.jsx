import React from 'react';
import '../styles/contactItems.scss';

function ContactItem({ data }) {
  return (
    <div className="contact-item">
      <img className="contact-pic" src={data.picture} alt="Contact" />
      <h3>{data.name}</h3>
      <p>
        Phone:
        {' '}
        {data.phone}
        <br />
        Address:
        {' '}
        {data.address}
      </p>
    </div>
  );
}

export default ContactItem;
