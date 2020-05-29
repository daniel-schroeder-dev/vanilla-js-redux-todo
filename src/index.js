import { createStore } from 'redux';
import { addTodo } from './actions.js';
import { rootReducer } from './reducers.js';
import TodoItem from './components/TodoItem/TodoItem.js';

const form = document.querySelector('form');
const createTodoInput = document.getElementById('createTodo');
const todoList = document.getElementById('todoList');

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	todoList.innerHTML = '';
	state.forEach(todo => {
		new TodoItem(todo, todoList).render();
	});
});

form.addEventListener('submit', e => {
	e.preventDefault();
	store.dispatch(addTodo(createTodoInput.value));
	createTodoInput.value = '';
});

