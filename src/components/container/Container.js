import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Container({ children, className }) {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const ContainerWrapper = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    min-width: 320px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding-left: 71px;
    padding-right: 71px;
  }
`;
