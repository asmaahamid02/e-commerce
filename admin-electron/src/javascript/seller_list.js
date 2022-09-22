const remove= document.getElementById("remove")
const tableUsername=document.getElementById("table-username")
const add_button = document.getElementById("add-button")
const popup_element = parent.document.querySelector("body").querySelector(".background")
const edit_icons = Array.from(document.getElementsByClassName("fa-pencil"))
for(const i of edit_icons){
    i.addEventListener("click", () => {
        popup_element.style.visibility = "visible"
    })
}




remove.addEventListener("click",()=>{
    remove.innerText="Removed"
})
tableUsername.addEventListener("click",()=>{
    window.location.replace("profile.html")
})

// show popup for seller info and change buttons from edit to add
add_button.addEventListener("click", () =>{
    popup_element.style.visibility = "visible"
    popup_element.querySelector(".other-background").innerText = "ADD SELLER"
    popup_element.querySelector(".green-background").innerHTML = "Add profile picture <input type='file' accept='.jpg, .png, .svg' id='image'/>"
})

