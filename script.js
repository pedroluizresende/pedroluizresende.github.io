const nav = document.getElementById('nav-links');
const menu = document.querySelector('.hamburguer-menu')
const openItem = document.querySelector('.open-menu');
const closeItem = document.querySelector('.close-menu');

function clickMenu() {
  if (nav.style.display === '' || nav.style.display === 'none') {
  nav.style.display = 'flex';
  openItem.style.display = 'none';
  closeItem.style.display = 'flex';
} else {
  nav.style.display = 'none';
  openItem.style.display = 'flex';
  closeItem.style.display = 'none'
}}

menu.addEventListener('click', clickMenu)