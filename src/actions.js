import { ADD_TODO } from './action-constants.js';

export function addTodo(description) {
	return { type: ADD_TODO, description };
}
