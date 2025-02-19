let eyes = document.querySelectorAll('.eye-icon');
let inputs = document.querySelectorAll('.password');

eyes.forEach((icon, index) => {
  icon.onclick = () => {
    if (inputs[index].type === 'password') {
      inputs[index].type = 'text';
      icon.className = 'ti ti-eye eye-icon';
    } else {
      inputs[index].type = 'password';
      icon.className = 'ti ti-eye-closed eye-icon';
    }
  };
});

let login = document.querySelector('.login-form');
let register = document.querySelector('.register-form');
let navBtn = document.querySelectorAll('.navigation');

const toggleForms = (showForm, hideForm, activeNav, inactiveNav) => {
  showForm.style.display = 'block';
  hideForm.style.display = 'none';
  activeNav.classList.add('active');
  inactiveNav.classList.remove('active');
};

navBtn.forEach((btn) => {
  btn.onclick = () => {
    if (btn.id === 'login') {
      toggleForms(login, register, btn, document.getElementById('register'));
    } else if (btn.id === 'register') {
      toggleForms(register, login, btn, document.getElementById('login'));
    }
  };
});

let container = document.querySelector('.container');
let forms = document.querySelectorAll('form');

forms.forEach((form) => {
  let btn = form.querySelector('.main-btn');
  btn.onclick = (event) => {
    event.preventDefault();
    let username = form.querySelector('.username').value;
    let message = document.querySelector('.logged-message');
    message.textContent = 'Welcome, ' + username;
    message.style.display = 'flex';
    container.style.display = 'none';
  };
});
