const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('ul#ingredients');

const ingredientsList = ingredients.map((item) => {
const ingredientItem = document.createElement('li');
ingredientItem.classList.add('item');
ingredientItem.textContent = item;

return ingredientItem;
})

ingredientsListRef.append(...ingredientsList);