import { createStore } from 'redux';

const rootReducer = (state = [], action) => {
	return state;
}

const store = createStore(rootReducer);

console.log(store)
