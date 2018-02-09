const navButton = document.querySelector('button.navbar[aria-expanded]');
const menuList = document.querySelector('.menu-list');
const showMenuItem = document.querySelector('a.menu-item');

function toggleNav({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded',!expanded);
}

function collapseNav() {
  navButton.setAttribute('aria-expanded', false);
}

function showItems() {
  document.querySelector('ul').classList.toggle('expand');
}

showMenuItem.addEventListener('mouseover', showItems);
navButton.addEventListener('click', toggleNav);
menuList.addEventListener('click', collapseNav);




