import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectors, operations, addFilter } from 'redux/contacts';
import { authSelectors } from 'redux/auth';
import ContactsItem from './ContactsItem';
import Spinner from 'components/Spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.filteredContacts);
  const loading = useSelector(selectors.isLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(operations.fetchContacts());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (contacts.length === 0) dispatch(addFilter(''));
  }, [contacts.length, dispatch]);

  return (
    <>
      {loading && <Spinner />}
      {contacts.length > 0 ? (
        <TableContainer component={Paper}>
          <TableStyled aria-label="simple table">
            <TableHead>
              <TableRowStyled>
                <TableCellStyled align="left">Name</TableCellStyled>
                <TableCellStyled align="left">Phone</TableCellStyled>
                <TableCellStyled align="left">Action</TableCellStyled>
              </TableRowStyled>
            </TableHead>
            <TableBody>
              {contacts.map(person => (
                <ContactsItem
                  key={person.id}
                  name={person.name}
                  number={person.number}
                  id={person.id}
                />
              ))}
            </TableBody>
          </TableStyled>
        </TableContainer>
      ) : (
        <TypographyStyled component="h2" variant="h4">
          Add your first contact
        </TypographyStyled>
      )}
    </>
  );
}

const TableStyled = styled(Table)`
  width: 90%;
  border-radius: 5px;
`;
const TableRowStyled = styled(TableRow)`
  display: flex;
`;
const TableCellStyled = styled(TableCell)`
  display: flex;
  padding: 10px 0;
  width: 42.5%;
  height: 50px;
  text-transform: uppercase;
  color: var(--yellow);
  background-color: var(--lighter-blue);
  outline: 1px solid var(--white);

  :nth-of-type(3n) {
    width: 5%;
  }
`;
const TypographyStyled = styled(Typography)`
  text-align: center;
  color: var(--light-blue);
`;
