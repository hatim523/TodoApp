import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Nav from './Nav';
import Todo from './Todo';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>

          <Route path="/todo" exact component={Todo} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
