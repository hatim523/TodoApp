import React from 'react';
import Login from './Login';
import isLogged from '../api/loginCheck';
import Dashboard from './Dashboard';

function Home() {
  return (
    <div>
      {isLogged() ? <Dashboard /> : <Login />}
    </div>
  );
}

export default Home;
