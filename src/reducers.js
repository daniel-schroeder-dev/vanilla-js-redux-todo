import { ADD_TODO, REMOVE_TODO } from './action-constants.js';

export function rootReducer(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state, 
				{ id: action.id, description: action.description, completed: false },
			];
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id);
		default:
			return state;
	}
}
