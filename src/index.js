import React from 'react';
import ReactDOM from 'react-dom';
import { AzureAD } from 'react-aad-msal';
 
import App from './App';
import { authProvider } from './authprovider';
 
ReactDOM.render(
  <AzureAD provider={authProvider} forceLogin={true}>
    <App />
  </AzureAD>,
  document.getElementById('root'),
);