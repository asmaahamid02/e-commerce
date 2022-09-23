const submit = document.querySelector(".other-background")

submit.addEventListener('click', () =>{
    if (validName() && validUsername() && validPass() && validEmail()){
        console.log("good format")
    }else{
        console.log("bad format")
    }
})