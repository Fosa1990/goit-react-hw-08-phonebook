import styled from 'styled-components';

export default function Button({ content, type, handleClick, disabled }) {
  return (
    <ButtonWrapper type={type} onClick={handleClick} disabled={disabled}>
      {content}
    </ButtonWrapper>
  );
}
Button.defaultPtops = {
  type: 'button',
  disabled: true,
};
const ButtonWrapper = styled.button`
  border: 1px solid rgb(255, 252, 252);
  border-radius: 10px;
  box-shadow: 0.7px 0.7px 0.75px rgb(173, 172, 172);
  background-color: rgb(245, 250, 245);
  font-size: 14px;
  font-weight: 600;
  transition: all 250ms ease-in;
  font-family: var(--font);
  :hover {
    cursor: pointer;
    color: var(--white);
  }
`;
