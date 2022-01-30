import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function ContainerComponent({
  children,
  className,
  ...allyProps
}) {
  return (
    <ContainerWrapper className={className} {...allyProps}>
      {children}
    </ContainerWrapper>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const ContainerWrapper = styled(Container)`
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    min-width: 320px;
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0;
  }
`;
