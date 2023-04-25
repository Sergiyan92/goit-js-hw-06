const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const createElementLi = document.createElement('li');
  createElementLi.classList.add('item');
  createElementLi.textContent = ingredient;
  list.append(createElementLi);
});
