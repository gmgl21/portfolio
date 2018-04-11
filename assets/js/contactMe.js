const contactBtn = document.querySelector('.contactBtn');
const contactList = document.querySelector('.contactList');

function contactMe() {
  if(contactList.style.display === "none") {
    contactList.style.display = "block";
  } else {
    contactList.style.display = "none";
  }
}

contactBtn.addEventListener('click', contactMe);