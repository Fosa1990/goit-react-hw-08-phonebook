import styled from 'styled-components';
import Button from '../Button';
import { operations } from 'redux/contacts';
import { useDispatch } from 'react-redux';

export default function ContactsItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <Button
          content="Delete"
          handleClick={() => dispatch(operations.deleteContact(id))}
        />
      </Td>
    </Tr>
  );
}
const Tr = styled.tr`
  background-color: rgb(231, 231, 231);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
`;
const Td = styled.td`
  padding: 7px 10px 7px 10px;
  text-align: center;
  color: lightslategray;
  outline: 0.1px solid rgb(243, 237, 237);

  Button {
    margin: 0;
    padding: 2px 0;
    width: 100%;
    height: auto;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    :hover {
      background-color: var(--light-purple);
    }
  }
`;
