import { 
	ADD_TODO, 
	REMOVE_TODO, 
	TOGGLE_COMPLETED,
	TOGGLE_VISIBILITY, 
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

export function toggleVisibility(visibility) {
	return { type: TOGGLE_VISIBILITY, visibility };
}

function generateID() {
	return Date.now();
}
