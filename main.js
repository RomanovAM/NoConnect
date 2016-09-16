import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'
import {store} from './store';
import {App} from './container';
import React from 'react';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function mapStateToProps (state) {
    return {
        result: state
    }
};

const Containerr = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Containerr/>
    </Provider>,
    document.getElementById('root'));
