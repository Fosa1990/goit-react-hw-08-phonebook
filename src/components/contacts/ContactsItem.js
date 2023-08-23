import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import styles from 'styled-components';
import EdiText from 'react-editext';
import { Button, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { operations } from 'redux/contacts';
import {
  nameValidation,
  numberValidation,
  validationNameMessage,
  validationNumberMessage,
} from 'helpers/constants';

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
    <TableRowStyled>
      <TableCellStyled align="left">
        <EdiTextStyled
          id={id}
          name="name"
          type="text"
          value={nameEditor}
          onSave={onSaveName}
          validation={onValidateName}
          validationMessage={validationNameMessage}
          cancelOnEscape={true}
          showButtonsOnHover
          hideIcons={true}
          editButtonContent="&#128221;"
          saveButtonContent="&#10004;"
          cancelButtonContent="&#9747;"
        />
      </TableCellStyled>
      <TableCellStyled align="left">
        <EdiTextStyled
          id={id}
          name="number"
          type="number"
          value={numberEditor}
          onSave={onSaveNumber}
          validation={onValidateNumber}
          validationMessage={validationNumberMessage}
          cancelOnEscape={true}
          showButtonsOnHover
          hideIcons={true}
          editButtonContent="&#128221;"
          saveButtonContent="	&#10004;"
          cancelButtonContent="&#9747;"
        />
      </TableCellStyled>
      <TableCellStyled align="left">
        <ButtonStyled
          type="button"
          variant="outlined"
          color="primary"
          onClick={onDeleteContact}
        >
          <DeleteIcon />
        </ButtonStyled>
      </TableCellStyled>
    </TableRowStyled>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const TableRowStyled = styles(TableRow)`
background-color: var(--bright-blue);
  :nth-of-type(2n + 1) {
    background-color: var(--white);
  }
  td{
  padding: 7px 10px 7px 10px;
  }
`;
const TableCellStyled = styles(TableCell)`
  text-align: center;
  color: var(--dark-blue);
  outline: 0.1px solid rgb(243, 237, 237);

    div[editext='view-container'] {
      justify-content: space-between;
      flex-wrap: wrap;
}
`;
const EdiTextStyled = styled(EdiText)`
  button {
    border-radius: 5px;
  }
  button[editext='edit-button'] {
    color: var(--dark);
  }
  button[editext='save-button'] {
    &:hover {
      background: var(--green);
      color: var(--light);
    }
  }
  button[editext='cancel-button'] {
    &:hover {
      background: var(--red);
      color: var(--light);
    }
  }
`;
const ButtonStyled = styled(Button)`
  background-color: transparent;
  :hover {
    color: var(--yellow);
    background-color: var(--lighter-blue);
  }
`;
