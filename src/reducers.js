import { 
	ADD_TODO, 
	REMOVE_TODO,
	TOGGLE_COMPLETED,
	TOGGLE_VISIBILITY,
} from './action-constants.js';

function todoReducer(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state, 
				{ id: action.id, description: action.description, completed: false },
			];
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id);
		case TOGGLE_COMPLETED:
			return state.map(todo => (
				todo.id === action.id ?
				{ ...todo, completed: !todo.completed } :
				todo
			));
		default:
			return state;
	}
}

export function rootReducer(state = {}, action) {
	return {
		todos: todoReducer(state.todos, action),
	};
}
