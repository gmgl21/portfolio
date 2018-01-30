const navButton = document.querySelector('button.navbar[aria-expanded]');
const portfolioButton = document.querySelector('.portfolio');

function toggleNav({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded',!expanded);
}

function portfolioList() {
  portfolioButton.classList.toggle('open');
}

navButton.addEventListener('click', toggleNav);
portfolioButton.addEventListener('click', portfolioList);