const dashboard = document.getElementById("dashboard")
const customers = document.getElementById("customers")
const sellers = document.getElementById("sellers")
const iframe = document.getElementById("frame")
const username = document.getElementById("username")
const title = document.getElementById("nav-title")
const popup_element = document.querySelector(".background")


dashboard.addEventListener("click",()=>{
    popup_element.style.visibility = "hidden"
    iframe.src = "statistics.html"
    title.innerText = "Statistics"
})
customers.addEventListener("click",()=>{
    popup_element.style.visibility = "hidden"
    iframe.src = "clients_list.html"
    title.innerText = "Customers"
})
sellers.addEventListener("click",()=>{
    popup_element.style.visibility = "hidden"
    iframe.src = "seller_list.html"
    title.innerText = "Sellers"
})