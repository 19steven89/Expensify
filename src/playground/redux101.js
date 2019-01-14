import {createStore} from "redux";

// Action generators - are functions that return action objects 

// example add function below showing destructuring the object params to access the properties individually
const add = ({ a, b}) => {
    return a + b
};
console.log(add({ a: 1, b: 12}));


// destrcuture object params incrementBy and added the default value of 1. Done here: { incrementBy = 1 }  = {}
const incrementCount = ({ incrementBy = 1 }  = {}) => ({
        // the type property HAS TO be defined 
        type: "INCREMENT",
        incrementBy: incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({ count = 101} = {}) => ({
    type: "SET",
    count: count
});

// Reducers are pure functions, i.e the output is determined by the input


// state param is the current state
// first param in createStore is state, the 2nd param is action
// reducers never change state or action

// the reducer is a function you pass into createStore from redux!
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case "INCREMENT":
        const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
        const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: action.count
            };      
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
        };
};

const store = createStore(countReducer());

// this method from store is called every time teh state changes. the console.log will output the state 
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});

//dispatch sends data to the store to do something with the information
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount());
store.dispatch(resetCount({ count: 0 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ set: 101 }));
