import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './fonts.js';
import GlobalStyle from './global.style';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue, red } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: blue['500'] },
    secondary: { main: red['400'] },
  },
  typography: {
    allVariants: {
      color: grey[50],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
