import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyled } from './components/global_styled/GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);