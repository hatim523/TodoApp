import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/api';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const verifyCredentials = () => {
    seterror('Verifying...');

    API.get(`users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
          localStorage.setItem('auth', res.data[0].id);
          seterror(() => 'Redirecting...');
          window.location.reload(false);
        } else {
          seterror(() => 'Invalid username or password.');
        }
      })
      .catch((res) => {
        seterror(res.message);
      });
  };
  return (
    <div>
      Login to get access to awesome features. :p
      <br />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
      <br />
      {error.length > 0 && <div>{error}</div>}
      <button type="button" onClick={verifyCredentials}>Login</button>
      <br />
      <Link to="register/">
        <button type="button">Register</button>
      </Link>
    </div>
  );
}

export default Login;
