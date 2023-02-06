function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector('.widget .color');
const button = document.querySelector('.widget .change-color');

button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor;
}
