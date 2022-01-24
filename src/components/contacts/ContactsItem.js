import styled from 'styled-components';
import Button from '../button';
import { deleteContact } from '../../redux/contacts/operations/contactsOperations';
import { useDispatch } from 'react-redux';

export default function ContactsItem({ name, phone, id }) {
  const dispatch = useDispatch();
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>
        <Button
          content="Delete"
          handleClick={() => dispatch(deleteContact(id))}
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
