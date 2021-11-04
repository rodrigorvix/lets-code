// Alterar tema clicando no icon theme;

//Adicionar tarefa ao apertar a tecla Enter

//Remover tarefa ao clicar no icon-delete

// Armazenar as tarefas no Local Storage

const html = document.querySelector('html');
const buttonTheme = document.querySelector('.btn-theme');

html.dataset.theme = localStorage.theme ? localStorage.theme : 'dark'

buttonTheme.addEventListener('click', changeTheme)

function changeTheme() {
  const body = document.querySelector('body');
  const iconDark = document.querySelector('.theme-dark');
  const iconLight = document.querySelector('.theme-light');

  iconDark.classList.toggle('show-icon');
  iconLight.classList.toggle('show-icon');
  html.dataset.theme = html.dataset.theme !== 'dark' ? 'dark' : 'light';

  const currentUrlBG = window.getComputedStyle(body).getPropertyValue('background-image');
  console.log(html.dataset.theme)
  
  if (html.dataset.theme === 'dark') {
    console.log(window.getComputedStyle(body).getPropertyValue('background-image').indexOf('light'))
    
  }else {
    console.log(window.getComputedStyle(body).getPropertyValue('background-image').indexOf('dark'))
  }
  
}