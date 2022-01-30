import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';

export default function ContactsPage() {
  return (
    <>
      <Container fixed>
        <Form />
        <TypographyStyled align="center" component="h2" variant="h3">
          Contacts
        </TypographyStyled>
        <Filter />
        <Contacts />
      </Container>
    </>
  );
}

const TypographyStyled = styled(Typography)`
  font-family: var(--big);
  color: var(--yellow);
`;
