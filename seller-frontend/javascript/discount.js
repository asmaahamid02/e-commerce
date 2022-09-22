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
    window.location.href= '../seller-frontend/categories.html'
})

products.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href= '../seller-frontend/products.html'
})

discounts.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href= '../seller-frontend/discounts-table.html'
})

addDiscount.addEventListener("click",(event)=>{
    event.preventDefault()
    window.location.href= '../seller-frontend/discount-popup.html'
})

statistics.addEventListener("click",(event)=>{
    event.preventDefault();
    window.location.href= '../seller-frontend/statistics.html'
})

 