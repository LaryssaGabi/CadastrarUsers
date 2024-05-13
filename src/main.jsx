import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/global.jsx';
import RoutesTelas from './routes.jsx'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RoutesTelas/>
      <GlobalStyle />
    </>
  </React.StrictMode>
  
);
