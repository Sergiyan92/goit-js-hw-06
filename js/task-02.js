const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const createElements = ingredients.map(ingredient => {
  const createElementLi = document.createElement('li');
  createElementLi.classList.add('item');
  createElementLi.textContent = ingredient;
  return createElementLi;
});
list.append(...createElements);
