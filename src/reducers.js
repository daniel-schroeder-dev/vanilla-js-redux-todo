import { ADD_TODO } from './action-constants.js';

export function rootReducer(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { id: action.id, description: action.description, completed: false }];
		default:
			return state;
	}
}
