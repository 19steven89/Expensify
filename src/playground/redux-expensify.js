import { createStore, combineReducers } from "redux";

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