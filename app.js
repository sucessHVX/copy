const button = document.querySelector('button');
const nav = document.querySelector('nav');

function clickEvent() {
  nav.classList.toggle('hidden');
}

button.addEventListener('click', clickEvent);
