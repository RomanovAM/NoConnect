import { createStore } from 'redux';
import {counter} from './reducers'; 

export let store = createStore(counter);


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