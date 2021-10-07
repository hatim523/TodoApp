import React from 'react';
import { Link } from 'react-router-dom';
import isLogged from '../api/loginCheck';
import logout from '../api/logout';

function Nav() {
  const loggedNavigation = (
    <>
      <Link to="/todo">
        <li>Todos</li>
      </Link>
      <Link to="/contacts">
        <li>Contacts</li>
      </Link>

      <li><button type="button" onClick={() => logout()}>Logout</button></li>
    </>
  );

  const unAuthorizedNavigation = (
    <>
      <Link to="/"><li>Login</li></Link>
      <Link to="register/"><li>Register</li></Link>
    </>
  );
  return (
    <nav>
      <ul>
        {isLogged() ? loggedNavigation : unAuthorizedNavigation}
      </ul>
    </nav>
  );
}

export default Nav;
