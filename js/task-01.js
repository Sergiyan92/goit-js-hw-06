const ul = document.querySelectorAll('.item');
console.log('Number of categories:', ul.length);

ul.forEach(event => {
  const title = event.querySelector('h2').textContent;
  const elemLi = event.querySelectorAll('li').length;
  console.log(`Category:${title}\nElements:${elemLi}`);
});
