const colorName = document.querySelector('.widget .color');
const button = document.querySelector('.widget .change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorName.textContent;



  // document.body.style.backgroundColor = getRandomHexColor();
  // colorName.textContent = document.body.style.backgroundColor;

}