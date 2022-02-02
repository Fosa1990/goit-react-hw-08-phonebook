import GoogleAuth from 'components/GoogleAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const active = { color: 'var(--yellow)' };

export default function AuthNav() {
  return (
    <div>
      <NavLinkWrapper to="/signin" exact activeStyle={active}>
        Sign in
      </NavLinkWrapper>
      <NavLinkWrapper to="/login" exact activeStyle={active}>
        Log in
      </NavLinkWrapper>
      <GoogleAuth />
    </div>
  );
}

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
