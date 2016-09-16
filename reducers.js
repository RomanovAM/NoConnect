import {INCREMENT, DECREMENT, ADD, SUB, CLS, add, sub} from './actions';

export function reducer(state = 0, action) {
    let actionType = action.type,
        a= action.num1,
        b= action.num2;

    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case ADD:
            return a + b
        case SUB:
            return a - b
        case CLS:
            return 0
        default:
            return state
    }
};
