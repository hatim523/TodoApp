import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Nav from './Nav';
import Todo from './Todo';
import Home from './Home';
import Register from './Register';
import Protected from './Protected';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" exact><Protected protectedComponent={<Todo />} /></Route>
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
