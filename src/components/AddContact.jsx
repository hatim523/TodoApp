import React, { useState, useContext } from 'react';
import FileBase64 from 'react-file-base64';
import { addNewContact } from '../redux/contact/apiActions';
import ContactContext from '../redux/contact/contactContext';
import '../styles/contactItems.scss';

function AddContact() {
  const contactContext = useContext(ContactContext);

  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const [picture, setpicture] = useState('');

  const addContact = () => {
    const contactObject = {
      name,
      address,
      phone,
      picture,
    };

    addNewContact(contactContext.contactDispatch, contactObject);
  };

  return (
    <div>
      <input
        className="input-text"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <input
        className="input-text"
        placeholder="Address"
        type="text"
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />
      <br />
      <input
        className="input-text"
        placeholder="Phone"
        type="text"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <br />
      <FileBase64
        className="input-text"
        multiple={false}
        onDone={({ base64 }) => setpicture(base64)}
      />
      <br />
      <button type="button" onClick={() => addContact()}>Add Contact</button>
    </div>
  );
}

export default AddContact;
