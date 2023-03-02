import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ThemeProvider } from '@mui/material/styles';
import './config';
import App from './App';
import materialTheme from './materialTheme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
