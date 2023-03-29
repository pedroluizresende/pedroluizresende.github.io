import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
