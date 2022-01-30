import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { authSelectors } from 'redux/auth';
import { AppBar } from '@mui/material';
import styled from 'styled-components';

export default function AppBarComponent() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar color="primary" position="absolute">
      <AppBarWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarWrapper>
    </AppBar>
  );
}

const AppBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  border-bottom: 1px solid #2a363b;
`;
