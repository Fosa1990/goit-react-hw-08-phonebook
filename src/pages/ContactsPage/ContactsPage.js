import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/contacts';

export default function ContactsPage() {
  const contacts = useSelector(selectors.filteredContacts);

  return (
    <>
      <Container fixed>
        <Form />
        <TypographyStyled align="center" component="h2" variant="h3">
          Contacts
        </TypographyStyled>
        {contacts.length > 0 && <Filter />}
        <Contacts />
      </Container>
    </>
  );
}

const TypographyStyled = styled(Typography)`
  font-family: var(--big);
  color: var(--yellow);
`;
