const remove= document.getElementById("remove")
const tableUsername=document.getElementById("table-username")

remove.addEventListener("click",()=>{
    remove.innerText="Removed"
})
tableUsername.addEventListener("click",()=>{
    window.location.replace("profile.html")
})