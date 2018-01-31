const navButton = document.querySelector('button.navbar[aria-expanded]');

function toggleNav({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded',!expanded);
}

navButton.addEventListener('click', toggleNav);
