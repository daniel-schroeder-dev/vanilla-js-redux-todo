import { 
	ADD_TODO, 
	REMOVE_TODO, 
	TOGGLE_COMPLETED 
} from './action-constants.js';

export function addTodo(description) {
	return { type: ADD_TODO, description, id: generateID() };
}

export function removeTodo(id) {
	return { type: REMOVE_TODO, id };
}

export function toggleCompleted(id) {
	return { type: TOGGLE_COMPLETED, id };
}

function generateID() {
	return Date.now();
}
