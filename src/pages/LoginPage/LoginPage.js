import Container from 'components/Container';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styled from 'styled-components';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <H1>Login page</H1>

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
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          variant="outlined"
          required
          min="7"
          margin="dense"
        />

        <Button
          type="submit"
          disabled={email === '' || password === '' || password.length < 7}
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </LoginForm>
    </Container>
  );
}

const H1 = styled.h1`
  color: var(--yellow);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  font-family: var(--font);
  background-color: var(--light);
  button {
    margin: 0 auto;
    width: 200px;
    padding: 5px 20px;
    font-size: 18px;
  }
`;
const LoginInput = styled(TextField)`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
