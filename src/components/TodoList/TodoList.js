import TodoItem from '../TodoItem/TodoItem.js';
import './TodoList.css';

class TodoList {
	constructor() {
		this.element = document.getElementById('todoList');
		this.element.innerHTML = '';
		this.todos = [];
	}

	addTodo(todo) {
		this.todos.push(new TodoItem(todo.description, this.element));
	}

	renderTodos() {
		this.todos.forEach(todo => todo.render());
	}

}

export default TodoList;
