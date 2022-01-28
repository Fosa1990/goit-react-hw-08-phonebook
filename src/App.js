import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import Section from 'components/Section';
import Spinner from 'components/Spinner';
import { authOperations, authSelectors } from 'redux/auth';
import { Toaster } from 'react-hot-toast';

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "Contacts-page" */),
);
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-page" */),
);
const SigninPage = lazy(() =>
  import('./pages/SigninPage' /* webpackChunkName: "Signin-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "Login-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Toaster position="top-right" />
        <AppBar />
        {isFetchingCurrentUser && <Spinner />}
        {isFetchingCurrentUser ? (
          <Spinner />
        ) : (
          <Switch>
            <Suspense fallback={<Spinner />}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/signin"
                redirectTo="/contacts"
                restricted
              >
                <SigninPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute exact path="/contacts" redirectTo="/contacts">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        )}
      </Container>
    </Section>
  );
}
