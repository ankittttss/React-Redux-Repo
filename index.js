
// Three Concept of Redux -: ACTION,STORE AND REDUCER//
// Store -: store the state of your application
// Actions -: Describe the actions of your application
// Reducer -: Ties the store and actions together.

// There are three Principle in our Redux Application

// We'll be defining Actions.

import { combineReducers, legacy_createStore as createStore} from 'redux';
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'
const redux_logger = require('redux-logger');
const applymiddleware = redux_logger.applymiddleware
const logger = redux_logger.createLogger()

function buycake(){
    return{
        type:BUY_CAKE,
        info:'First redux Actions'
    }
}

function buyicecream(){
    return{
        type:BUY_ICECREAM,
        info:'First redux Actions'
    }
}

const buy = () => {
    return actions;
}

// We'll be defining Reducers
//Definition -: Function that accepts state and action as arguments, and returns the next state of the
//Application

// (previousstate,actions) => {newState};

const initialcake = {
    numberofcake: 10
}

const initialIcecream = {
    numberofIcecreams:20
}

const cakereducer = (state = initialcake, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberofcake: state.numberofcake - 1
        } 
        default: return state
    }
}

const icecreamreducer = (state = initialIcecream, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberofIcecreams: state.numberofIcecreams - 1
        } 
        default: return state
    }
}

// State-: One store for the entire application
// Responsibilties -: a) Holds Application state
//b) Allow access to state via getState();
//c)Allows state to be updated via dispatch(action)
//d)Registers Listeners via subscribe(listeners)

// To have a state object we will be including Redux Library;

const rootreducers = combineReducers({ // We have combined the both of the reducers here
    cake:cakereducer,
    icecream:icecreamreducer
})


const store = createStore(rootreducers,applymiddleware(logger));
console.log(store.getState);
const unsubscribe = store.subscribe(()=>{console.log('updated state',store.getState)});
store.dispatch(buycake(),console.log(store.getState));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe();

// Now we will be having two reducers.
// Middleware -; Suggested way to extend redux with custom functioality//
// We can use middleare for logging, Crashing and performing async Task
// synchronous Actions -: as soon as action was dispatched the state was updated//


