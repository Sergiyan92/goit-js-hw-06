const textInput = document.querySelector('#text');
const fontSize = document.querySelector('#font-size-control');

fontSize.addEventListener('input', e => {
  const textSize = fontSize.value;
  textInput.style.fontSize = `${textSize}px`;
});
