import {createStore  , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import logger from 'redux-logger';

let store;
export function configureStore(){
    store=createStore(reducers, applyMiddleware(thunk, logger));
    return store;
}