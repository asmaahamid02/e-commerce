const input_image = document.getElementById('image')
const input_username = document.getElementById('username-input')
const username_error = document.getElementById('username-error')
const input_email = document.getElementById('email-input')
const email_error = document.getElementById('email-error')
const input_password = document.getElementById('password-input')
const password_error = document.getElementById('password-error')
const input_name = document.getElementById('name-input')
const name_error = document.getElementById('name-error')
const exit_form = document.getElementById("close")


exit_form.addEventListener("click", () => {
    exit_form.parentElement.parentElement.style.visibility = "hidden"
})

input_image.onchange = function() {
    const reader = new FileReader()
    reader.onload = () => {
        const image = reader.result
        document.getElementById('image-element').src = image
    }
    console.log(reader.files)
    reader.readAsDataURL(this.files[0])
}

input_username.onblur = () =>{
    const pattern = /^\w{2,}\w$/
    const result = input_username.value.search(pattern)
    if(result == -1){
        username_error.innerText = '*should be at least 3 characters with no spaces'
    }else{
        username_error.innerText = ''
    }
}

input_email.onblur = () =>{
    const pattern = /^\w{3,}@\w{3,}\.\w{2,}$/
    const result = input_email.value.search(pattern)
    if(result == -1){
        email_error.innerText = '*please enter a valid email'
    }else{
        email_error.innerText = ''
    }
}

input_password.onblur = () =>{
    if (input_password.value.length < 12){
        passNotStrong()
        return
    }
    if(!twoInt()){
        passNotStrong()
        return
    }

    if(!twoSymbols()){
        passNotStrong()
        return
    }

    if(!twoUpper()){
        passNotStrong()
        return
    }

    if(!twoLower()){
        passNotStrong()
        return
    }

    password_error.innerText = ''
}

input_name.onblur = () => {
    const pattern = /\w{2,}/
    result = input_name.value.search(pattern)
    if(result == -1){
        name_error.innerText = '*name should be at least 2 characters'
    }else{
        name_error.innerText = ''
    }
}

function twoInt(){
    let pattern = /\d.*\d/
    let result = input_password.value.search(pattern)
    if(result == -1){
        return false
    }else{
        return true
    }
}

function twoSymbols(){
    pattern = /\W.*\W/
    result = input_password.value.search(pattern)
    if(result == -1){
        return false
    }else{
        return true
    }
}

function twoLower(){
    pattern = /[a-z].*[a-z]/
    result = input_password.value.search(pattern)
    if(result == -1){
        passNotStrong()
        return 
    }else{
        password_error.innerText = ''
    }
}

function twoUpper(){
    pattern = /[A-Z].*[A-Z]/
    result = input_password.value.search(pattern)
    if(result == -1){
        passNotStrong()
        return 
    }else{
        password_error.innerText = ''
    }
}

function passNotStrong(){
    password_error.innerText = '*password is not strong enough'
} 