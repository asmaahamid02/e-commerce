const login_form = document.querySelector('.login-form')

login_form.addEventListener('submit', (e) => {
  e.preventDefault()
  window.location.href = '../view/dashboard.html'
})
