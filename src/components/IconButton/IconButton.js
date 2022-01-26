import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function IconButton({ children, onClick, ...otherProps }) {
  return (
    <IconButtonWrapper type="button" onClick={onClick} {...otherProps}>
      {children}
    </IconButtonWrapper>
  );
}

IconButton.defaultPtops = {
  children: null,
  onClick: () => null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

const IconButtonWrapper = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font: inherit;
  background-color: #4caf50;
  cursor: pointer;
`;
