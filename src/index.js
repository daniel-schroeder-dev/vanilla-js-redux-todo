import { createStore } from 'redux';
import TodoItem from './components/TodoItem/TodoItem.js';

const todoListContainer = document.getElementById('todoList');
const form = document.querySelector('form');
const createTodoInput = document.getElementById('createTodo');

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

form.addEventListener('submit', e => {
	e.preventDefault();
	store.dispatch({ type: 'ADD_TODO', description: createTodoInput.value });
});

function rootReducer(state = [], action) {
	return state;
}
