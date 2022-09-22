const dashboard = document.getElementById("dashboard")
const customers = document.getElementById("customers")
const sellers = document.getElementById("sellers")
const iframe = document.getElementById("frame")
const username = document.getElementById("username")
const title = document.getElementById("nav-title")


dashboard.addEventListener("click",()=>{
    iframe.src = "statistics.html"
    title.innerText = "Statistics"
})
customers.addEventListener("click",()=>{
    iframe.src = "clients_list.html"
    title.innerText = "Customers"
})
sellers.addEventListener("click",()=>{
    iframe.src = "seller_list.html"
    title.innerText = "Sellers"
})