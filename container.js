import {Component} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import {store} from './store';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';
import {Buttons} from './button';



export class App extends Component {
  render() {
    return (
        <div className='mainComponent'>
          <Buttons/>
          <p> {'Результат: '} {this.props.result} </p>
        </div>
      )
    }
};
