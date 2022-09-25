const cart_container = document.querySelector('.card-checkout')
const get_cartItems_api =
  'http://localhost/e-commerce/ecommerce-server/api/get_items_cart.php?id=' +
  JSON.parse(localStorage.getItem('user')).id

const checkout = document.querySelector('.checkout')

console.log(cart_container)

const header = `<div class="pagetitle">
<h1>MY BAG</h1>
</div>`
cart_container.innerHTML = header

const getCartItems = async () => {
  const response = await axios.get(get_cartItems_api)
  const data = response.data
  console.log(response.data)
  if (data.status == 1 && data.data != null) {
    // console.log(data)

    for (const product of data.data) {
      const row = `<div class="saved-product">
      <div class="saved-product-img">
          <img src="../seller-frontend/assets/images/products/${product.image}">
      </div>
      <div class="saved-product-details">
          <h3>Title</h3>
          <p class="description">${product.description}</p>

          <div class="price-quantity">
              <h6>$<span class="product_price">${product.price}</span></h6>
              <div class="quantity">
                  <label for="quantity">Qty</label>
                  <input type="number" name="quantity" min="1" value="${product.quantity}">
              </div>
          </div>
      </div>
  </div>`
      cart_container.innerHTML += row
    }
  } else {
    cart_container.innerHTML += 'You bag is empty!'
    checkout.style.display = 'none'
  }
}

getCartItems()
