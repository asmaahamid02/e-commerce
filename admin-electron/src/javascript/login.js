const login_form = document.querySelector('.login-form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const success_message = document.querySelector('.success-message')
const error_message = document.querySelector('.error-message')
const username_message = document.querySelector('#input-username')
const password_message = document.querySelector('#input-password')
let valid_name, valid_password

login_form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (valid_name && valid_password) {
    //submit
    error_message.classList.add('hide')
    error_message.textContent = ''
    window.location.href = '../view/dashboard.html'
  } else {
    //prevented
    error_message.classList.remove('hide')
    error_message.textContent = 'Fill all the fields'
  }
})

username.addEventListener('input', () => {
  if (username.value.length < 1) {
    username.style.border = '1px solid red'
    username_message.classList.remove('hide')
    username_message.textContent = 'Username/Email should not be empty'
    valid_username = false
  } else {
    error_message.classList.add('hide')
    username_message.classList.add('hide')
    username.style.border = '2px solid #64c5b1'
    valid_name = true
  }
})

password.addEventListener('input', () => {
  if (password.value.length < 1) {
    password.style.border = '1px solid red'
    password_message.classList.remove('hide')
    password_message.textContent = 'Username/Email should not be empty'
    valid_password = false
  } else {
    error_message.classList.add('hide')
    password_message.classList.add('hide')
    password.style.border = '2px solid #64c5b1'
    valid_password = true
  }
})
