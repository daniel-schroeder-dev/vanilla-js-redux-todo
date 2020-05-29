import './TodoItem.css';

class TodoItem {

	constructor(todo, container) {
		this.description = todo.description;
		this.completed = todo.completed;
		this.id = todo.id;
		this.container = container;
		this.element = this._createElement();
	}

	_createElement() {
		const li = document.createElement('li');
		const todoItemSpan = document.createElement('span');
		const removeItemSpan = document.createElement('span');
		li.classList.add('todo-item');
		li.dataset.id = this.id;
		li.dataset.completed = this.completed;
		removeItemSpan.classList.add('remove-todo');
		todoItemSpan.textContent = this.description;
		removeItemSpan.textContent = 'X';
		li.appendChild(todoItemSpan);
		li.appendChild(removeItemSpan);
		return li;
	}

	render() {
		this.container.appendChild(this.element);
	}

}

export default TodoItem;
