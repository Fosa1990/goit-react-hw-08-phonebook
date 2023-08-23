import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const hasToken = useSelector(authSelectors.getToken);
  const hasTokenAndLoggedIn = isLoggedIn && hasToken && children;

  return (
    <Route {...routeProps}>
      {hasToken ? hasTokenAndLoggedIn : <Redirect to={redirectTo} />}
    </Route>
  );
}

PrivateRoute.defaultProps = {
  redirectTo: '/',
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  routeProps: PropTypes.any,
};
