import React from 'react';

function ContactItem({ data }) {
  return (
    <div style={{ color: 'blue' }}>
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
