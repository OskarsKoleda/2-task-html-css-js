// 1
const linkElement = document.getElementById('link');

linkElement.addEventListener('click', () => {
  linkElement.setAttribute('style', 'display: none;');
})

// 2
let counter = 0;

document.addEventListener('click', () => {
  counter++;
  if (counter === 5) {
    window.alert('You have clicked 5 times!')
    counter = 0;
  }
})

// 3
let originalTitleText = document.querySelector('h1').innerText;
let h1 = document.querySelector('h1');

updateTitle();

function updateTitle() {
  let date = new Date().getFullYear();
  let time = new Date().toLocaleTimeString();
  h1.innerText = `${date} - ${originalTitleText} - ${time}`;
}

setInterval(() => {
  updateTitle();
}, 1000);