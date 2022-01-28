import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Section from 'components/Section';
import Preloader from 'components/Preloader';
import { authOperations, authSelectors } from 'redux/auth';

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
        {isFetchingCurrentUser ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <AppBar />

            <Switch>
              <Suspense fallback={<Preloader />}>
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
          </>
        )}
      </Container>
    </Section>
  );
}
