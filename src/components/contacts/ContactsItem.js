import { Button } from '@mui/material';
import { operations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import styles from 'styled-components';
import { styled } from '@mui/material/styles';

export default function ContactsItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <ButtonStyled
          type="button"
          variant="outlined"
          color="primary"
          onClick={() => dispatch(operations.deleteContact(id))}
        >
          Delete
        </ButtonStyled>
      </Td>
    </Tr>
  );
}
const Tr = styles.tr`
background-color: var(--bright-blue);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
`;
const Td = styles.td`
  padding: 7px 10px 7px 10px;
  text-align: center;
  color: var(--dark-blue);
  outline: 0.1px solid rgb(243, 237, 237);
`;
const ButtonStyled = styled(Button)`
  background-color: transparent;
  :hover {
    color: var(--yellow);
    background-color: var(--lighter-blue);
  }
`;
