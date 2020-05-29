import { createStore } from 'redux';
import TodoItem from './components/TodoItem/TodoItem.js';

const rootReducer = (state = [], action) => {
	return state;
}

const store = createStore(rootReducer);

console.log(store)

const todoListContainer = document.getElementById('todoList');
const todoItem = new TodoItem('foo', todoListContainer);

todoItem.render();
