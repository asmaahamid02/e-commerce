const submit = document.querySelector(".other-background")
const popup = document.querySelector(".add-form")

submit.addEventListener('click', () =>{
    // check if input fields are valid before calling the api
    if (validName() && validUsername() && validPass() && validEmail()){
        const data = new FormData()
        data.append('username', input_username.value)
        data.append('password', input_password.value)
        data.append('email', input_email.value)
        data.append('type', 'seller')
        data.append('name', input_name.value)
        if(base64_image){
            data.append('profile_picture', base64_image)
        }
        addSeller(data)
    }else{
        console.log("bad format")
    }
})

// call the create seller api and pass the required data and display a message for the user accordingly
async function addSeller(data){
    const response = await axios.post("http://localhost/e-commerce/ecommerce-server/api/create_user.php", data)
    console.log(response.data)
    const old_message = document.querySelector(".status-message")
    if(old_message){
        old_message.remove()
    }
    const message = document.createElement("span")
    message.classList.add("status-message")
    message.style.color = response.data.status == 1 ? "lightgreen" : "red"
    message.innerText = response.data.message
    popup.appendChild(message)
}