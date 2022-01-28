import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '@mui/material';
import defaultAvatar from 'images/png/default-avatar.png';
import styled from 'styled-components';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Wrapper>
      <Avatar src={avatar} alt="" width="32" />
      <Span>Welcome, {name}</Span>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  margin-right: 5px;
`;
const Span = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;
