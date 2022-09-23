const submit = document.querySelector(".other-background")

submit.addEventListener('click', () =>{
    if (validName() && validUsername() && validPass() && validEmail()){
        const data = new FormData()
        data.append('username', input_username.value)
        data.append('password', input_password.value)
        data.append('email', input_email.value)
        data.append('type', 'seller')
        data.append('name', input_name.value)
        addSeller(data)
    }else{
        console.log("bad format")
    }
})

async function addSeller(data){
    const response = await axios.post("http://localhost/e-commerce/ecommerce-server/api/create_user.php", data)
    console.log(response.data)
}