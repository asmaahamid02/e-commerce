const input_image = document.getElementById('image')
const input_username = document.getElementById('username-input')
const username_error = document.getElementById('username-error')
const input_email = document.getElementById('email-input')
const email_error = document.getElementById('email-error')
const input_password = document.getElementById('password-input')
const password_error = document.getElementById('password-error')

input_image.onchange = function() {
    const reader = new FileReader()
    reader.onload = () => {
        console.log('inside function')
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