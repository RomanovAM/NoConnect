import {Component} from 'react';
import React from 'react';
import {store} from './store';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';


export class Buttons extends Component {
/*----------------------------------------------*/
    clickInc(e) {
        store.dispatch({ type: 'INCREMENT' })
    }
    clickDec(e) {
        store.dispatch({ type: 'DECREMENT' })
    }
    clickCls(e) {
        store.dispatch({ type: 'CLS' })
    }
/*---------------------------------------------*/
    render() {
        return  <div className='button'>
                    <button className='inc' onClick={this.clickInc}>+1</button>
                    <button className='dec' onClick={this.clickDec}>-1</button>
                    <button className='cls' onClick={this.clickCls}>CLS</button>
                </div>
    }
};
