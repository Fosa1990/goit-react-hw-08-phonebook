import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button, Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from 'styled-components';
import defaultAvatar from 'images/png/black_rabbit_ low.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Wrapper component="div">
      <AvatarImage src={avatar} alt="User avatar" width="32" />
      <Span component="span">{name}</Span>
      <Button
        type="button"
        variant="outlined"
        color="inherit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 551px) {
    justify-content: flex-end;
  }
`;
const AvatarImage = styles(Avatar)`
  margin-right: 10px;
`;
const Span = styled(Box)`
  display: inline-block;
  font-weight: 700;
  margin-right: 12px;
  color: var(--yellow);
`;
