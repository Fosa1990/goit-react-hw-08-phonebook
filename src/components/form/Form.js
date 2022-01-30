import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from 'redux/contacts';
import { operations } from 'redux/contacts';
import { Button, TextField, Typography, Container } from '@mui/material';
import { NAME, NUMBER } from 'helpers/constants';
import toast from 'react-hot-toast';
import { styled } from '@mui/material/styles';
import styles from 'styled-components';

export default function Form() {
  const contacts = useSelector(selectors.getItems);
  const dispatch = useDispatch();
  const onSubmit = dataContacts =>
    dispatch(operations.addContact(dataContacts));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const validateContact = (contactName, contactsNumber, contacts) => {
    if (contacts.some(({ name }) => name === contactName)) {
      toast.error(`"${contactName}" is already in contacts!`);
      return false;
    } else if (contacts.some(({ number }) => number === contactsNumber)) {
      toast.error(`"${contactsNumber}" is already in contacts!`);
      return false;
    } else return true;
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === NAME) setName(value);
    if (name === NUMBER) setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const dataContacts = { name, number };
    const isContactValid = validateContact(name, number, contacts);
    if (isContactValid) {
      onSubmit(dataContacts);
      onReset();
    }
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContainerWrapper fixed>
      <Title component="h1" variant="h1">
        Phonebook
      </Title>
      <MainForm autoComplete="off" onSubmit={handleFormSubmit}>
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={name}
          placeholder="Enter fullname"
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          variant="outlined"
          margin="dense"
          required
        />

        <FormInput
          label="Number"
          type="tel"
          name="number"
          value={number}
          placeholder="Enter number number"
          onChange={handleInputChange}
          min="7"
          max="17"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          variant="outlined"
          margin="dense"
          required
        />
        <ContactsButton
          type="submit"
          color="primary"
          variant="contained"
          disabled={name === '' || number === ''}
        >
          Add contact
        </ContactsButton>
      </MainForm>
    </ContainerWrapper>
  );
}
const ContainerWrapper = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const MainForm = styles.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  font-family: var(--font);
`;
const Title = styled(Typography)`
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
  color: var(--lighter-blue);
`;
const FormInput = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
const ContactsButton = styled(Button)`
  margin: 0 auto;
  width: 200px;
  padding: 5px 20px;
  font-size: 18px;
`;
