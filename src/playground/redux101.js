import {createStore} from "redux";

// state param is the current state
//first param in createStore is state, the ns param is action
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count+1
            };
        case "DECREMENT":
            return {
                count: state.count-1
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
        }
});

console.log(store.getState());


//increment the count
//dispatch sends data to the store to do something with the information
store.dispatch({
    // caps is a redux naming convention
    type: "INCREMENT"
});

console.log(store.getState());

store.dispatch({
    // caps is a redux naming convention
    type: "DECREMENT"
});

store.dispatch({
    // caps is a redux naming convention
    type: "DECREMENT"
});

console.log(store.getState());

store.dispatch({
    // caps is a redux naming convention
    type: "RESET"
});

console.log(store.getState());
