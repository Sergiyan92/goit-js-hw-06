const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData.entries());
  if (!formObj.email || !formObj.password) {
    alert('Заповни!!!');
  } else {
    console.log(formObj);
    form.reset();
  }
});
