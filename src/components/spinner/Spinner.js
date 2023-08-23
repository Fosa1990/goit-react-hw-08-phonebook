import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <Bars height="100" width="100" color="#f6f4f3" ariaLabel="loading" />
    </SpinnerWrapper>
  );
}

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 10px;
`;
