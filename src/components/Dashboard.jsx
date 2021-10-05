import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      Access these wonderful features from this beautiful Dashboard
      <ul>

        <Link to="/todo"><li>Todos</li></Link>
      </ul>
    </div>
  );
}

export default Dashboard;
