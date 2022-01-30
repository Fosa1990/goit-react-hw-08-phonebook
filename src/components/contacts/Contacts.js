import styled from 'styled-components';
import Spinner from 'components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectors } from 'redux/contacts';
import { operations } from 'redux/contacts';
import ContactsItem from './ContactsItem';
import { authSelectors } from 'redux/auth';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.filteredContacts);
  const loading = useSelector(selectors.isLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(operations.fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {loading && <Spinner />}
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Action</Th>
          </Tr>
        </thead>

        <tbody>
          {contacts.map(person => (
            <ContactsItem
              key={person.id}
              name={person.name}
              number={person.number}
              id={person.id}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

const Table = styled.table`
  margin-top: 25px;
  width: 100%;
  border-radius: 5px;
`;
const Tr = styled.tr`
  background-color: rgb(231, 231, 231);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
`;
const Th = styled.th`
  height: 50px;
  text-transform: uppercase;
  color: var(--yellow);
  background-color: var(--lighter-blue);
`;
