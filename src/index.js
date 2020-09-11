import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore } from 'redux'


import reducer from './reducers'
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App';
import {configureStore} from './store';
import ReactDOM from 'react-dom';
const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
