import React from 'react';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <Bars heigth="100" width="100" color="#f6f4f3" ariaLabel="loading" />
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
