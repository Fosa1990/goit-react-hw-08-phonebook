import Container from 'components/Container';
import styled from 'styled-components';

const HomePage = () => (
  <Container>
    <H1>Welcome page</H1>
  </Container>
);

const H1 = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
`;

export default HomePage;
