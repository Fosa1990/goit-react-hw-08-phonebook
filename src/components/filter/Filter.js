import { selectors } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import addFilter from 'redux/contacts/contacts-actions';
import { Typography, InputLabel, Input, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = event => dispatch(addFilter(event.currentTarget.value));
  return (
    <LabelStyled color="info" variant="standard">
      <TitleStyled align="center" component="h3" variant="h6">
        Find contacts by <BoxStyled component="span">name</BoxStyled>
      </TitleStyled>
      <InputStyled
        type="search"
        name="search"
        value={value}
        onChange={onChange}
        color="primary"
      />
    </LabelStyled>
  );
}

const LabelStyled = styled(InputLabel)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;
const TitleStyled = styled(Typography)`
  color: var(--lighter-blue);
  font-family: var(--font);
`;
const InputStyled = styled(Input)`
  padding: 0 10px;
  color: var(--light-blue);
`;
const BoxStyled = styled(Box)`
  color: var(--yellow);
`;
