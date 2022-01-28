import Container from 'components/Container';
import Button from 'components/Button';
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
        <SigninLabel>
          Name
          <SigninInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </SigninLabel>

        <SigninLabel>
          Email
          <SigninInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </SigninLabel>

        <SigninLabel>
          Password
          <SigninInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </SigninLabel>

        <Button
          content="Log in"
          type="submit"
          disabled={name === '' || email === '' || password === ''}
        />
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
  button {
    margin: 0 auto;
    width: 200px;
    padding: 5px 20px;
    font-size: 18px;
    :hover {
      background-color: var(--green);
      border: 1px solid var(--white);
    }
    :disabled:hover {
      cursor: not-allowed;
      color: var(--white);
      background-color: var(--red);
      border: 1px solid var(--white);
    }
  }
`;
const SigninLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
`;
const SigninInput = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
