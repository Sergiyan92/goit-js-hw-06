const input = document.querySelector('#validation-input');
const data = document.querySelector('[data-length="6"]');
const dataNumber = data.dataset.length;

input.addEventListener('blur', event => {
  const inputValue = input.value.length;
  if (inputValue === parseInt(dataNumber)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
