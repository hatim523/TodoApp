import React from 'react';
import { Redirect } from 'react-router-dom';

function Protected({ protectedComponent }) {
  const isLogged = localStorage.getItem('auth');
  return (
    <div>
      {isLogged != null ? protectedComponent : <Redirect to="/" />}
    </div>
  );
}

export default Protected;
