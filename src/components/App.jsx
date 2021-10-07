import React, { useReducer } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Nav from './Nav';
import Todo from './Todo';
import Home from './Home';
import Contact from './Contact';
import ContactContext from '../redux/contact/contactContext';
import Register from './Register';
import Protected from './Protected';
import contactReducer, { contactsInitialState } from '../redux/contact/contactReducer';

function App() {
  const [contactState, contactDispatch] = useReducer(contactReducer, contactsInitialState);
  return (
    <Provider store={store}>
      <ContactContext.Provider value={{ contactState, contactDispatch }}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todo" exact><Protected protectedComponent={<Todo />} /></Route>
            <Route path="/contacts" exact><Protected protectedComponent={<Contact />} /></Route>
            <Route path="/register" exact component={Register} />
          </Switch>
        </Router>
      </ContactContext.Provider>
    </Provider>
  );
}

export default App;
