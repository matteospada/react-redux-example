import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore }from '@reduxjs/toolkit'
import slice from './reducer';


const store = configureStore({
  reducer: slice.reducer
})

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
