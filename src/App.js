import Section from './components/section';
import Container from './components/container';
import Title from './components/title';
import Form from './components/form';
import Filter from './components/filter';
import Contacts from './components/contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations/contactsOperations';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <>
      <Toaster position="top-right" />
      <Form />
      <Section>
        <Container>
          <Title title="Contacts" />
          <Filter />
          <Contacts />
        </Container>
      </Section>
    </>
  );
}
