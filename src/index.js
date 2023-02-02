import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './Redux-Store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <Main/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
