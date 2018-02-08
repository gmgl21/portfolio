const navButton = document.querySelector('button.navbar[aria-expanded]');
const menuList = document.querySelector('.menu-list');

function toggleNav({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded',!expanded);
}

function collapseNav() {
  navButton.setAttribute('aria-expanded', false);
}

navButton.addEventListener('click', toggleNav);
menuList.addEventListener('click', collapseNav);




