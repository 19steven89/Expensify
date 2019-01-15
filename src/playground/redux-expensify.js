import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADDEXPENSE action generator set-up
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
    // return new array with expenses values added 
    // ...state is the spread operator copying values from the array, this takes all 
    // of the current items, then adds the new one using action.expense
    // this is added from the store.dispatch call below with coffee etc
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
        // create new cloned object from expense and override the new 
        //data thats been passed in using action.updates.
        // the data thats been changed is the amount, changed using store.dispatch below
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      // return new object with the updated text being "rent" as set below in the store.dispatch call
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
  	// return new object from state, specifying the startDate to be the value passed into
       // the params using: store.dispatch(setStartDate(125)); below.
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
     // return true if the 3 const match the values passed in 
    return startDateMatch && endDateMatch && textMatch;
    // array JS sort method 
  }).sort((a, b) => {
    // sort expnses date so it shows most recent first
    if(sortBy === "date"){
        // can find sort syntax for sort(a,b) in MDN web page!! arr.sort([compareFunction])
        // give most recent expense first by outputting 
        return a.createdAt > b.createdAt ? -1 : 1;
    }else if(sortBy === "amount"){
         // sort expnses amount so it shows most recent first
        return a.createdAt > b.createdAt ? -1 : 1; 
    }
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
    // get entire expenses array
  const state = store.getState();
    // get only the visibleExpenses	  
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // changed the amount to 500 pence in expense2
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

const demoState = {
    expenses: [{
        id: "deuddjedue",
        description: "January Rent",
        note: "this was the final payment for that address",
        // amount 54500 is in pence. i.e. £545.00
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


// object spread operator example
const user = {
    name: "Bob",
    age: 24
};

console.log({
    // spread operator for object declared above. This makes a new object with the same properties
    //as the user object declared above. i.e. its useed to CLONE an object 
    ...user,
    location: "Glasgow",
    // override user properties
    name: "Ste",
    age: 33
});
