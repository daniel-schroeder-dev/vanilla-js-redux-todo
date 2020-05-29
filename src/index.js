import { createStore } from 'redux';
import { rootReducer } from './reducers.js';
import { 
	addTodo, 
	removeTodo, 
	toggleCompleted,
	toggleVisibility, 
} from './action-creators.js';
import TodoItem from './components/TodoItem/TodoItem.js';

const form = document.querySelector('form');
const createTodoInput = document.getElementById('createTodo');
const todoList = document.getElementById('todoList');
const visibilityToggle = document.getElementById('visibilityToggle');

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	todoList.innerHTML = '';
	state.todos.forEach(todo => {
		new TodoItem(todo, todoList).render();
	});
});

form.addEventListener('submit', e => {
	e.preventDefault();
	store.dispatch(addTodo(createTodoInput.value));
	createTodoInput.value = '';
});

visibilityToggle.addEventListener('change', e => {
	store.dispatch(toggleVisibility(e.target.value));
});

todoList.addEventListener('click', e => {
	if (e.target.classList.contains('remove-todo')) {
		const id = +e.target.parentElement.dataset.id;
		store.dispatch(removeTodo(id));
	} else if (e.target.classList.contains('todo-item') || e.target.parentElement.classList.contains('todo-item')) {
		const target = e.target.classList.contains('todo-item') ? e.target : e.target.parentElement;
		store.dispatch(toggleCompleted(+target.dataset.id));
	}
});

