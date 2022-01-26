import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import LoginPage from './pages/LoginPage';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import Section from 'components/Section';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>
    </Section>
  );
}
