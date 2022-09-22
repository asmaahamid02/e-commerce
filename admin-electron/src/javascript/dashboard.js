const dashboard = document.getElementById("dashboard")
const customers = document.getElementById("customers")
const sellers = document.getElementById("sellers")
const username =document.getElementById(username)

dashboard.addEventListener("click",()=>{
window.location.replace('dashboard.html')
})
customers.addEventListener("click",()=>{
    window.location.replace('clients_lists.html')
})
sellers.addEventListener("click",()=>{
    window.location.replace('sellers_lists.html')
})
sellers.addEventListener("click",()=>{
    window.location.replace('profile.html')
})