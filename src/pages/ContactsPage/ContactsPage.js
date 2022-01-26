import Section from '../../components/Section';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Filter from '../../components/Filter';
import Contacts from '../../components/Contacts';

export default function ContactsPage() {
  return (
    <>
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
