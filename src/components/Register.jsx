import React, { useState } from 'react';
import API from '../api/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validPassword = () => password === confirmPassword && password.length > 1;
  const validUserDetails = () => name.length > 0 && email.length > 8;
  const addUser = () => {
    if (!validPassword || !validUserDetails) { return; }

    const userObject = {
      name,
      email,
      password,
    };

    API.post('users', userObject)
      .then((response) => {
        localStorage.setItem('auth', response.data.id);
        window.location.href = '/';
      })
      .catch((response) => {
        setError(response.message);
      });
  };

  return (
    <div>
      Register to learn this awesome UI
      <br />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); }} />
      <br />

      { confirmPassword.length > 0 && !validPassword() && <div>Passwords do not match</div>}
      {error.length > 0 && <div>{error}</div>}
      <button type="button" disabled={!validPassword()} onClick={() => addUser()}>Register</button>
    </div>
  );
}

export default Register;
