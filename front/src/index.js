import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import './styles/index.scss';

import { composeWithDevTools } from 'redux-devtools-extension';
import { getUsers } from './_services/users.actions';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

