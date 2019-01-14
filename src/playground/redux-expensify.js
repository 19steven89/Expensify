import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADDEXPENSE action generator set-up
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            // return new array with expenses values added 
            // ...state is the spread operator copying values from the array, this takes all 
            // of the current items, then adds the new one using action.expense
            // this is added from the store.dispatch call below with coffee etc
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => {
                return id !== action.id
            });
        default:
            return state;
    }
};

// filters reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// track changes in the state
store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: "rent", amount: 100}));
const expense2 = store.dispatch(addExpense({ description: "coffee", amount: 300}));

store.dispatch(removeExpense({ id: expense1.expense.id}))

console.log(expense1);


const demoState = {
    expenses: [{
        id: "deuddjedue",
        description: "January Rent",
        note: "this was the final payment for that address",
        // amount 54500 is in pence. i.e. $545.00
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};