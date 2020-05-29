import { ADD_TODO, REMOVE_TODO } from './action-constants.js';

export function addTodo(description) {
	return { type: ADD_TODO, description, id: generateID() };
}

export function removeTodo(id) {
	return { type: REMOVE_TODO, id };
}

function generateID() {
	return Date.now();
}
