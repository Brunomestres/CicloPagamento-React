import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './main/Reducers';
import App from './main/app';

const store = createStore(Reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app'));