import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styled from 'styled-components';

export default function Error({ error }) {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(authOperations.clearError());
    window.history.back();
  };

  return (
    <ErrorWrapper>
      <ErrorTitle>
        Oops, something went wrong! Please, try again later.
      </ErrorTitle>
      <ErrorMessage>{error.message}</ErrorMessage>
      <Button
        type="button"
        onClick={handleGoBack}
        color="primary"
        variant="contained"
      >
        Go back
      </Button>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 310px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 25px 10px 25px;
  margin: 15px auto 5px auto;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: rgba(251, 251, 251, 0.9);
  box-shadow: 8px 8px 15px -1px rgba(0, 0, 0, 0.87);
`;
const ErrorTitle = styled.h4`
  display: block;
`;
const ErrorMessage = styled.p`
  display: block;
`;
