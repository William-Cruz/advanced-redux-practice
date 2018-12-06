import { combineReducers } from 'redux';



function newComments(state = 0, action) {
    return state;
};

function newTasks(state = 0, action) {
    return state;
};

function newOrders(state = 0, action) {
    return state;
};

function newTickets(state = 0, action) {
    return state;
};

// function orders(state = 0, action) {
//     return state;
// };

// function tasks(state = 0, action) {
//     return state;
// };

// function messages(state = 0, action) {
//     return state;
// };

const rootReducer = combineReducers({
    newComments,
    newTasks,
    newOrders,
    // tickets,
    // orders,
    // tasks,
    // messages,
    newTickets
});
export default rootReducer;
