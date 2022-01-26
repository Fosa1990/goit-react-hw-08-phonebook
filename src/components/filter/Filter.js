import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from 'redux/contacts';
import addFilter from 'redux/contacts/contacts-actions';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = event => dispatch(addFilter(event.currentTarget.value));
  return (
    <Label>
      <Title>
        Find contacts by <Span>name</Span>
      </Title>
      <Input type="search" name="search" value={value} onChange={onChange} />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.p`
  margin: 5px 0;
  color: var(--white);
  font-family: var(--font);
  font-size: 18px;
  line-height: 1.5;
`;
const Span = styled.span`
  color: var(--yellow);
`;
const Input = styled.input`
  color: var(--light-blue);
`;
