import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
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
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
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
