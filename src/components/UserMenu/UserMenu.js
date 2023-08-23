import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { authSelectors, authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Wrapper component="div">
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
const Span = styled(Box)`
  display: inline-block;
  font-weight: 700;
  margin-right: 12px;
  padding: 12px;
  color: var(--yellow);
`;
