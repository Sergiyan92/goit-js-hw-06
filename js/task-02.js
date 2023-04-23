const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
  const createElementLi = document.createElement('li');
  createElementLi.classList.add('item');
  createElementLi.textContent = ingredient;
  fragment.append(createElementLi);
});
list.append(fragment);
