const addBtn= document.getElementById("add-btn")
const discode= document.getElementById("discode")
const dispercentage= document.getElementById("dispercentage")
const warning =document.getElementById("warning")
const disModal=document.getElementById("dis-modal")

addBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(discode.value=="" || dispercentage.value==""){
        warning.innerText="Please fill the requirments"
        warning.style.color="red"
    }else{
        warning.innerText=""
        disModal.style.display="none"
    }
})