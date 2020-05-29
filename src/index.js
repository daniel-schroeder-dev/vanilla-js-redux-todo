import { createStore } from 'redux';
import { addTodo } from './actions.js';
import { rootReducer } from './reducers.js';
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
	store.dispatch(addTodo(createTodoInput.value));
});

