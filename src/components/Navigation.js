import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const active = { color: 'var(--light-blue)' };

const Navigation = () => (
  <nav>
    <NavLinkWrapper to="/" exact activeStyle={active}>
      Home
    </NavLinkWrapper>

    <NavLinkWrapper to="/contacts" exact activeStyle={active}>
      Phonebook
    </NavLinkWrapper>
  </nav>
);

const NavLinkWrapper = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  :hover {
    color: var(--light-blue);
  }
`;

export default Navigation;
