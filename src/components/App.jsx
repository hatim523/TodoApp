import React, { useReducer, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import store from '../redux/store';
import Nav from './Nav';
import Todo from './Todo';
import Home from './Home';
import Contact from './Contact';
import ContactContext from '../redux/contact/contactContext';
import Register from './Register';
import Protected from './Protected';
import contactReducer, { contactsInitialState } from '../redux/contact/contactReducer';
import GlobalStyles from '../theme/GlobalStyles';
import useTheme from '../hooks/useTheme';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const [contactState, contactDispatch] = useReducer(contactReducer, contactsInitialState);
  const {
    theme, themeLoaded, getFonts, themes,
  } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Container style={{ fontFamily: selectedTheme.font }}>
          <Provider store={store}>
            <ContactContext.Provider value={{ contactState, contactDispatch }}>
              <Router>
                <Nav themes={themes} changeTheme={setSelectedTheme} />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/todo" exact><Protected protectedComponent={<Todo />} /></Route>
                  <Route path="/contacts" exact><Protected protectedComponent={<Contact />} /></Route>
                  <Route path="/register" exact component={Register} />
                </Switch>
              </Router>
            </ContactContext.Provider>
          </Provider>
        </Container>
      </ThemeProvider>
      )}

    </>
  );
}

export default App;
