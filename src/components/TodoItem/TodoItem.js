import './TodoItem.css';

class TodoItem {

	constructor(description, container) {
		this.description = description;
		this.container = container;
	}

	render() {
		const li = document.createElement('li');
		const todoItemSpan = document.createElement('span');
		const removeItemSpan = document.createElement('span');
		li.classList.add('todo-item');
		removeItemSpan.classList.add('remove-item');
		todoItemSpan.textContent = this.description;
		removeItemSpan.textContent = 'X';
		li.appendChild(todoItemSpan);
		li.appendChild(removeItemSpan);
		this.container.appendChild(li);
	}

}

export default TodoItem;
