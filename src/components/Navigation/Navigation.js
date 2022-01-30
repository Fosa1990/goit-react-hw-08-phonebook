import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styled from 'styled-components';

const active = { color: 'var(--yellow)' };

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLinkWrapper to="/" exact activeStyle={active}>
        Home
      </NavLinkWrapper>

      {isLoggedIn && (
        <NavLinkWrapper to="/contacts" exact activeStyle={active}>
          Phonebook
        </NavLinkWrapper>
      )}
    </nav>
  );
};

const NavLinkWrapper = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  :hover {
    color: var(--light);
  }
`;

export default Navigation;
