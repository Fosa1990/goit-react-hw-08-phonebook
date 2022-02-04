import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '@mui/material';
import { operations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import styles from 'styled-components';
import EdiText from 'react-editext';

const nameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberValidation =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const validationNameMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const validationNumberMessage =
  'number number must be digits and can contain spaces, dashes, parentheses and can start with +';

export default function ContactsItem({ name, number, id }) {
  const [nameEditor, setNameEditor] = useState(name);
  const [numberEditor, setNumberEditor] = useState(number);
  const dispatch = useDispatch();

  const onSaveName = value => {
    setNameEditor(value);
    dispatch(operations.editContactName({ id, value }));
  };

  const onSaveNumber = value => {
    setNumberEditor(value);
    dispatch(operations.editContactNumber({ id, value }));
  };

  const onDeleteContact = () => dispatch(operations.deleteContact(id));

  const onValidateName = value => (value.match(nameValidation) ? true : false);

  const onValidateNumber = value =>
    value.match(numberValidation) ? true : false;

  return (
    <Tr>
      <Td>
        <EdiText
          id={id}
          name="name"
          type="text"
          value={nameEditor}
          onSave={onSaveName}
          validation={onValidateName}
          validationMessage={validationNameMessage}
        />
      </Td>
      <Td>
        <EdiText
          id={id}
          name="number"
          type="number"
          value={numberEditor}
          onSave={onSaveNumber}
          validation={onValidateNumber}
          validationMessage={validationNumberMessage}
        />
      </Td>
      <Td>
        <ButtonStyled
          type="button"
          variant="outlined"
          color="primary"
          onClick={onDeleteContact}
        >
          Delete
        </ButtonStyled>
      </Td>
    </Tr>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
const Tr = styles.tr`
background-color: var(--bright-blue);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
`;
const Td = styles.td`
  padding: 7px 10px 7px 10px;
  text-align: center;
  color: var(--dark-blue);
  outline: 0.1px solid rgb(243, 237, 237);

  div[editext='view-container'] {
justify-content: space-between;
}
`;
const ButtonStyled = styled(Button)`
  background-color: transparent;
  :hover {
    color: var(--yellow);
    background-color: var(--lighter-blue);
  }
`;
