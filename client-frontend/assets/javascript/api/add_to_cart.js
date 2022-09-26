// window.addEventListener('DOMContentLoaded', () => {
//   const add_to_cart = document.querySelector('#add-to-cart')
//   const clientId = JSON.parse(localStorage.getItem('user')).id
//   const product_id = sessionStorage.getItem('currentProduct')

//   const addToCart = async () => {
//     const response = await axios.get(
//       'http://localhost/e-commerce/ecommerce-server/api/add_items_to_cart.php?client_id=' +
//         clientId +
//         '&product_id=' +
//         product_id
//     )
//     const res = response.data
//     if (res.status) {
//       triggerAlert(res.message)
//       setTimeout(function () {
//         window.location.href = './checkout.html'
//       }, 1500)
//     } else {
//       triggerAlert(res.message)
//       setTimeout(function () {
//         window.location.reload()
//       }, 1500)
//     }
//   }

//   add_to_cart.addEventListener('click', () => {
//     console.log('clicked')
//     addToCart()
//   })
// })
