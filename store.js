import { createStore } from 'redux';
import {reducer} from './reducers';
import { applyMiddleware, compose } from 'redux';


export let store = createStore(reducer);


/*
store.subscribe(()=>{
    console.log(store.getState());
    console.log(store);
});
*/
store.subscribe(()=>{
    let a=store.getState();
    console.log(a);
});
/*
app: {

    inputNum1: {
        value: 5,
    },

    inputNum2: {
        value: 7,
    },

    result: {
        value: 0,
    }
}*/
