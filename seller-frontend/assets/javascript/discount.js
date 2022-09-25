// constants from discount pop up
// const addBtn = document.getElementById('add-btn')
// const discode = document.getElementById('discode')
// const dispercentage = document.getElementById('dispercentage')
// const warning = document.getElementById('warning')
// const disModal = document.getElementById('dis-modal')
// const discountForm = document.getElementById('discount-form')
// // constants from discount table
// const categories = document.getElementById('categories')
// const products = document.getElementById('products')
// const discounts = document.getElementById('discounts')
// const statistics = document.getElementById('stats')
// const addDiscount = document.getElementById('add-button')

// console.log(addBtn)
// window.onclick = function (event) {
//   if (event.target == discountForm) {
//     discountForm.style.display = 'none'
//   }
// }
// categories.addEventListener("click",(event)=>{
//     event.preventDefault();
//     window.location.href= '../seller-frontend/categories.html'
// })

// products.addEventListener("click",(event)=>{
//     event.preventDefault();
//     window.location.href= '../seller-frontend/products.html'
// })

// discounts.addEventListener("click",(event)=>{
//     event.preventDefault();
//     window.location.href= './discout-table.html'
// })

// addDiscount.addEventListener('click', (event) => {
//   event.preventDefault()
//   discountForm.style.display = 'flex'
// })

// statistics.addEventListener("click",(event)=>{
//     event.preventDefault();
//     window.location.href= '../seller-frontend/statistics.html'
// })

document.addEventListener('DOMContentLoaded', () => {
  const add_button = document.getElementById('add-button')
  const add_popup = document.querySelector('#add-popup')
  const exit_add_form = document.getElementById('add-close')

  exit_add_form.addEventListener('click', () => {
    add_popup.style.display = 'none'
  })

  const resetForm = (parent) => {
    const status_message = parent.querySelector('.status-message')
    const input_fields = parent.querySelectorAll('.info-field')
    if (status_message) {
      status_message.remove()
    }
    for (const i of input_fields) {
      i.value = ''
    }
    parent.style.display = 'block'
  }

  // show popup for seller info and change buttons from edit to add
  add_button.addEventListener('click', () => {
    resetForm(add_popup)
  })

  window.onclick = function (event) {
    if (event.target == add_popup) {
      add_popup.style.display = 'none'
    } else if (event.target == edit_popup) {
      edit_popup.style.display = 'none'
    }
  }
})
