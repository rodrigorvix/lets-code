// Alterar tema clicando no icon theme; ok 

//Adicionar tarefa ao apertar a tecla Enter - ok

// Contabilizar o numero de tarefas - ok

//Remover tarefa ao clicar no icon-delete

// Armazenar as tarefas no Local Storage

const html = document.querySelector('html');
const buttonTheme = document.querySelector('.btn-theme');
const inputTask = document.querySelector('#input-new-task')

let countTasks = 0

html.dataset.theme = localStorage.theme ? localStorage.theme : 'dark'

buttonTheme.addEventListener('click', changeTheme)

inputTask.addEventListener('keypress', addNewTask)

function changeTheme() {

  const iconDark = document.querySelector('.theme-dark');
  const iconLight = document.querySelector('.theme-light');

  iconDark.classList.toggle('show-icon');
  iconLight.classList.toggle('show-icon');
  html.dataset.theme = html.dataset.theme !== 'dark' ? 'dark' : 'light';
  
}

function addNewTask(event) {
 if(event.key === "Enter" && inputTask.value.trim() !== '') {

  const listTasks = document.querySelector('.list-tasks');
  const newTask = document.createElement('li');

  const numberTasks = document.querySelector('.number-tasks');
  numberTasks.classList.add('show-number-tasks')

  newTask.innerHTML = `
    <label class="task-container">
      <input type="checkbox">
      <span class="checkmark">
        <img src="./images/icon-check.svg" alt="icon check" class="icon-check">
      </span>
      <span class="task-name">${inputTask.value.substring(0,50)}</span>
    </label>
    <button class="btn-delete">
      <img src="./images/icon-cross.svg" alt="icon cross">
    </button>`
  listTasks.appendChild(newTask);
  
  countTasks++

  numberTasks.innerHTML = `${countTasks} tarefa(s) adicionada(s).`
  
  
  inputTask.value = ""
 }
}