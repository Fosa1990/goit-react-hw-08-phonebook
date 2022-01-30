import { Typography, Container, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import homeImage from 'images/gif/cyber.gif';

const HomePage = () => (
  <ContainerWrapper fixed>
    <TypographyStyled align="center" component="h1" variant="h1">
      PhoneBook
    </TypographyStyled>
    <TypographyTextStyled align="center" component="h2" variant="h2">
      One application for all your contacts.
    </TypographyTextStyled>
    <TypographyTextStyled align="center" component="h2" variant="h2">
      Simple. Secure. Free.
    </TypographyTextStyled>
    <Container>
      <IconWrapper
        component="img"
        src={homeImage}
        alt="phonebook greeting image"
      />
    </Container>
  </ContainerWrapper>
);

const ContainerWrapper = styled(Container)`
  padding-top: 20px;
  @media screen and (max-width: 457px) {
    padding-top: 50px;
  }
`;
const TypographyStyled = styled(Typography)`
  margin: 10px auto;
  padding: 5px 10px;
  max-width: 400px;
  font-family: 'Original Surfer', cursive;
  font-weight: 700;
  font-size: 48px;
  font-size: 30px;
  text-align: center;
  border-radius: 5px;
  color: var(--lighter-blue);
  background-color: var(--light-bg);
`;
const TypographyTextStyled = styled(TypographyStyled)`
  font-weight: 500;
  font-size: 40px;
  font-size: 30px;
  text-align: center;
`;
const IconWrapper = styled(Icon)`
  width: 100%;
  height: auto;
`;

export default HomePage;
