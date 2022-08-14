'use strict';
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const inputBtn = document.querySelector('#new-task-form new-task-submit');
const listEl = document.querySelector('#tasks');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	let task = input.value;

	const taskEl = document.createElement('div');
	taskEl.classList.add('task');

	const taskContentEle = document.createElement('div');
	taskContentEle.classList.add('content');

	taskEl.appendChild(taskContentEle);

	const taskInputEl = document.createElement('textarea');
	taskInputEl.classList.add('text');
	taskInputEl.rows = '15';
	taskInputEl.cols = '5';
	taskInputEl.wrap = 'hard';
	taskInputEl.value = task;
	taskInputEl.setAttribute('readonly', 'readonly');

	taskContentEle.appendChild(taskInputEl);

	const taskActionsEl = document.createElement('div');
	taskActionsEl.classList.add('actions');

	const taskEditEl = document.createElement('button');
	taskEditEl.classList.add('edit');
	taskEditEl.innerText = 'Edit';

	const taskDeleteEl = document.createElement('button');
	taskDeleteEl.classList.add('delete');
	taskDeleteEl.innerText = 'Delete';

	taskActionsEl.appendChild(taskEditEl);
	taskActionsEl.appendChild(taskDeleteEl);

	taskEl.appendChild(taskActionsEl);

	listEl.appendChild(taskEl);

	input.value = '';

	taskEditEl.addEventListener('click', e => {
		if (taskEditEl.innerText.toLowerCase() === 'edit') {
			taskEditEl.innerText = 'Save';
			taskInputEl.removeAttribute('readonly');
			taskInputEl.focus();
		} else {
			taskEditEl.innerText = 'Edit';
			taskInputEl.setAttribute('readonly', 'readonly');
		}
	});
	taskDeleteEl.addEventListener('click', e => {
		listEl.removeChild(taskEl);
	});
});
