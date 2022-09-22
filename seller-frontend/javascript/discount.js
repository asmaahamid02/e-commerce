// constants from discount pop up
const addBtn= document.getElementById("add-btn")
const discode= document.getElementById("discode")
const dispercentage= document.getElementById("dispercentage")
const warning =document.getElementById("warning")
const disModal=document.getElementById("dis-modal")
// constants from discount table
const categories= document.getElementById("categories")
const products= document.getElementById("products")
const discounts= document.getElementById("discounts")
const statistics= document.getElementById("stats")
const addDiscount =document.getElementById("add-dis-btn")



categories.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("hi")
    window.location.href("categories.html")
})

products.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href("products.html")
    console.log("hi")
})

discounts.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href("discounts.html")
    console.log("hi")
})

addDiscount.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href("../seller-frontend/discount-pop.html")
    console.log("hi")
})

statistics.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href("statistics.html")
    console.log("hi")
})

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