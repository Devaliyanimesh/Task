// src/main.jsx or src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 use 'react-dom/client' instead of 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
