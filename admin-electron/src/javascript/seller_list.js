const remove= document.getElementById("remove")
const tableUsername=document.getElementById("table-username")
const add_button = document.getElementById("add-button")

remove.addEventListener("click",()=>{
    remove.innerText="Removed"
})
tableUsername.addEventListener("click",()=>{
    window.location.replace("profile.html")
})

add_button.addEventListener("click", () =>{
    console.log(parent.document.querySelector("body").querySelector(".background").style.visibility = "visible")
})