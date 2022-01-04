import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { store } from './store';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c",
    },
    secondary: {
      main: "#81c784",
    }
  }
})

ReactDOM.render(

  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root'))



reportWebVitals();
