import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/contacts/selectors/contactsSelectors';
import styled from 'styled-components';
import Section from '../section';
import Container from '../container';
import Title from '../title';
import Button from '../button';
import { NAME, NUMBER } from '../../helpers/constants';
import { addContact } from '../../redux/contacts/operations/contactsOperations';
import toast from 'react-hot-toast';

export default function Form() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const onSubmit = dataContacts => dispatch(addContact(dataContacts));
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const validateContact = (contactName, contactPhone, contacts) => {
    if (contacts.some(({ name }) => name === contactName)) {
      toast.error(`"${contactName}" is already in contacts!`);
      return false;
    } else if (contacts.some(({ phone }) => phone === contactPhone)) {
      toast.error(`"${contactPhone}" is already in contacts!`);
      return false;
    } else return true;
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === NAME) setName(value);
    if (name === NUMBER) setPhone(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const dataContacts = { name, phone };
    const isContactValid = validateContact(name, phone, contacts);
    if (isContactValid) {
      onSubmit(dataContacts);
      onReset();
    }
  };

  const onReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Section>
      <Container>
        <Title title="Phonebook" />
        <MainForm autoComplete="off" onSubmit={handleFormSubmit}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              placeholder="Enter fullname"
              onChange={handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number
            <FormInput
              type="tel"
              name="number"
              value={phone}
              placeholder="Enter phone number"
              onChange={handleInputChange}
              minLength="7"
              maxLength="17"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <Button
            content="Add contact"
            type="submit"
            disabled={name === '' || phone === ''}
          />
        </MainForm>
      </Container>
    </Section>
  );
}
export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  font-family: var(--font);
  button {
    margin: 0 auto;
    width: 200px;
    padding: 5px 20px;
    :hover {
      background-color: var(--green);
      border: 1px solid var(--light-blue);
    }
    :disabled:hover {
      cursor: not-allowed;
      color: var(--red);
      background-color: var(--white);
      border: 1px solid var(--red);
    }
  }
`;
export const FormLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
`;
export const FormInput = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
