import React from 'react';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.css';
export default function Spinner() {
  return (
    <div className="loader-box">
      <Bars heigth="100" width="100" color="#f6f4f3" ariaLabel="loading" />
    </div>
  );
}
