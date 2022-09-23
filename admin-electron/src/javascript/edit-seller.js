const input_image = document.getElementById('image')
const input_username = document.getElementById('username-input')
const username_error = document.getElementById('username-error')
const input_email = document.getElementById('email-input')
const email_error = document.getElementById('email-error')
const input_password = document.getElementById('password-input')
const password_error = document.getElementById('password-error')
const input_name = document.getElementById('name-input')
const name_error = document.getElementById('name-error')
const exit_form = document.getElementById('close')
let base64_image

exit_form.addEventListener('click', () => {
  exit_form.parentElement.parentElement.style.visibility = 'hidden'
})

input_image.onchange = function () {
  const reader = new FileReader()
  reader.onload = () => {
    const image = reader.result
    document.getElementById('image-element').src = image
    base64_image = image
  }
  console.log(reader.files)
  reader.readAsDataURL(this.files[0])
}

input_username.onblur = validUsername
input_name.onblur = validName
input_email.onblur = validEmail
input_password.onblur = validPass

function validUsername() {
  const pattern = /^\w{2,}\w$/
  const result = input_username.value.search(pattern)
  if (result == -1) {
    username_error.innerText =
      '*should be at least 3 characters with no spaces or special characters'
    return false
  } else {
    username_error.innerText = ''
    return true
  }
}
function validEmail() {
  const pattern = /^\w{3,}@\w{3,}\.\w{2,}$/
  const result = input_email.value.search(pattern)
  if (result == -1) {
    email_error.innerText = '*please enter a valid email'
    return false
  } else {
    email_error.innerText = ''
    return true
  }
}

function validPass() {
  if (
    input_password.value.length < 12 ||
    !twoInt() ||
    !twoSymbols() ||
    !twoUpper() ||
    !twoLower()
  ) {
    console.log('length')
    passNotStrong()
    return false
  }

  password_error.innerText = ''
  return true
}

function validName() {
  const pattern = /\w{2,}/
  result = input_name.value.search(pattern)
  if (result == -1) {
    name_error.innerText = '*name should be at least 2 characters'
    return false
  } else {
    name_error.innerText = ''
    return true
  }
}

function twoInt() {
  let pattern = /\d.*\d/
  let result = input_password.value.search(pattern)
  if (result == -1) {
    return false
  } else {
    return true
  }
}

function twoSymbols() {
  pattern = /\W.*\W/
  result = input_password.value.search(pattern)
  if (result == -1) {
    return false
  } else {
    return true
  }
}

function twoLower() {
  pattern = /[a-z].*[a-z]/
  result = input_password.value.search(pattern)
  if (result == -1) {
    passNotStrong()
    return false
  } else {
    password_error.innerText = ''
    return true
  }
}

function twoUpper() {
  pattern = /[A-Z].*[A-Z]/
  result = input_password.value.search(pattern)
  if (result == -1) {
    passNotStrong()
    return false
  } else {
    password_error.innerText = ''
    return true
  }
}

function passNotStrong() {
  password_error.innerText = '*password is not strong enough'
}
