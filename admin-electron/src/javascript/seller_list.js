const remove= document.getElementById("remove")
const tableUsername=document.getElementById("table-username")
const add_button = document.getElementById("add-button")
const popup_element = parent.document.querySelector("body").querySelector(".background")
const edit_icons = Array.from(document.getElementsByClassName("fa-pencil"))
const status_message = parent.document.querySelector(".status-message")

// adding event listeners for all edit icons of all table rows 
for(const i of edit_icons){
    i.addEventListener("click", () => {
        if(status_message){
            status_message.remove()
        }
        popup_element.style.visibility = "visible"
        popup_element.querySelector(".other-background").innerText = "EDIT SELLER"
        parent.document.getElementById("file-input-text").innerText = "Edit profile picture"
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
    if(status_message){
        status_message.remove()
    }
    popup_element.style.visibility = "visible"
    popup_element.querySelector(".other-background").innerText = "ADD SELLER"
    parent.document.getElementById("file-input-text").innerText = "Add profile picture"
})

