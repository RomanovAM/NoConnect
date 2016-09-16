import 'babel-polyfill';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import {Component} from 'react';
import React from 'react';
import  ReactDOM  from 'react-dom';
import {connect} from 'react-redux';

/********************************************************************/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
