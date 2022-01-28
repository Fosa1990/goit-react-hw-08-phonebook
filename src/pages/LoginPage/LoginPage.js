import Container from 'components/Container';
import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authOperations } from 'redux/auth';

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
        <LoginLabel>
          Email
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginLabel>
          Password
          <LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LoginLabel>

        <Button
          content="Log in"
          type="submit"
          disabled={email === '' || password === ''}
        />
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
const LoginLabel = styled.label`
  margin: 0 0 2px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
`;
const LoginInput = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
`;
