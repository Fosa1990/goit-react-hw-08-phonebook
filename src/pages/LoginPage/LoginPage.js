import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  Container,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { authOperations } from 'redux/auth';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <ContainerWrapper fixed>
      <Title component="h1">Login page</Title>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          variant="outlined"
          required
          margin="dense"
        />

        <LoginInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleChange}
          variant="outlined"
          required
          min="7"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoginButton
          type="submit"
          disabled={email === '' || password === '' || password.length < 7}
          color="primary"
          variant="contained"
        >
          Submit
        </LoginButton>
      </LoginForm>
    </ContainerWrapper>
  );
}

const LoginForm = styles.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  font-family: var(--font);
`;
const ContainerWrapper = styled(Container)`
  padding-top: 10px;
  padding-bottom: 20px;
`;
const Title = styled(Typography)`
  color: var(--lighter-blue);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;
const LoginInput = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
const LoginButton = styled(Button)`
  margin: 0 auto;
  width: 200px;
  padding: 5px 20px;
  font-size: 18px;
`;
