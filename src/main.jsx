import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './page/home/App.jsx';
import GlobalStyle from './global.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>
);
