import {Component} from 'react';
import React from 'react';
import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';
import {store} from './store';
import {connect} from 'react-redux';
let text = "Это текст";
export class Inputs extends Component {
    render() {



        return  <div className='inputs'>
                    <input
                        className='inputA'
                        defaultValue='введите первое число'
                        onChange={this.inputNumA}
                    />
                    <input className='inputB'  defaultValue='введите второе число' onChange={this.inputNumB}/>
                </div>
    }
};

export class Buttons extends Component {


    clickAdd(e) {
        store.dispatch(add(5,5))
    }
    clickSub(e) {
        store.dispatch(sub(7,5))
    }
    clickInc(e) {
        store.dispatch({ type: 'INCREMENT' })
    }
    clickDec(e) {
        store.dispatch({ type: 'DECREMENT' })
    }
    clickCls(e) {
        store.dispatch({ type: 'CLS' })
    }

    render() {
        return  <div className='button'>
                    <button className='add' onClick={this.clickAdd}>+</button>
                    <button className='sub' onClick={this.clickSub}>-</button>
                    <button className='inc' onClick={this.clickInc}>+1</button>
                    <button className='dec' onClick={this.clickDec}>-1</button>
                    <button className='cls' onClick={this.clickCls}>CLS</button>
                </div>
    }
};

export class Result extends Component {
    render() {

        return  <div className='result'>

                </div>
    }
};

export class App extends Component {
    render() {
        return  <div className='mainComponent'>

                    <Buttons/>


                     <p>{text} {this.props.result}</p>

                </div>
    }
};

function mapStateToProps (state) {

    return {
        result: state
    }
};

export default connect(mapStateToProps)(App);
