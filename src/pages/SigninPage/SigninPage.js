import Container from 'components/Container';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authOperations } from 'redux/auth';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <H1>Registration Page</H1>

      <SigninForm onSubmit={handleSubmit} autoComplete="off">
        <SigninInput
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          variant="outlined"
          required
          margin="dense"
        />

        <SigninInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          variant="outlined"
          required
          margin="dense"
        />

        <SigninInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          variant="outlined"
          helperText="Password must be longer than 7 characters"
          required
          min="7"
          max="16"
          margin="dense"
        />

        <Button
          type="submit"
          disabled={
            name === '' ||
            email === '' ||
            password === '' ||
            password.length < 7
          }
          color="primary"
          variant="contained"
        >
          Sign up
        </Button>
      </SigninForm>
    </Container>
  );
}

const H1 = styled.h1`
  color: var(--yellow);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;
const SigninForm = styled.form`
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
const SigninInput = styled(TextField)`
  padding: 5px 20px;
  margin: 20px 0 px;
  width: 100%;
  border-radius: 10px;
`;
