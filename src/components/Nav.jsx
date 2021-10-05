import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/todo">
          <li>Todos</li>
        </Link>
        <li>Contacts</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}

export default Nav;
