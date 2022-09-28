const nav = document.getElementById('menu-container');
const menu = document.querySelector('.hamburguer-menu')
const openItem = document.querySelector('.open-menu');
const closeItem = document.querySelector('.close-menu');

function clickMenu() {
  if (nav.style.display === '') {
  nav.style.display = 'flex';
  openItem.style.display = 'none';
  closeItem.style.display = 'flex';
} else {
  nav.style.display = 'none';
  openItem.style.display = 'flex';
  closeItem.style.display = 'none'
}}

menu.addEventListener('click', () => {
  if (nav.style.display === '') {
    nav.style.display = 'flex';
    openItem.style.display = 'none';
    closeItem.style.display = 'flex';
  } else {
    nav.style.display = 'none';
    openItem.style.display = 'flex';
    closeItem.style.display = 'none'
  }
})