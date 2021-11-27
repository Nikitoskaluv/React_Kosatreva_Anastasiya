
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messageText = "Now that we know how to render stuff, let's make our app a little more complex by introducing child elements. ";

ReactDOM.render(
  <React.StrictMode>
    <App message={messageText} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();