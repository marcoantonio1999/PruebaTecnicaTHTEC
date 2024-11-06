import { StrictMode } from 'react'
import ReactDOM from 'react-dom'; 
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);