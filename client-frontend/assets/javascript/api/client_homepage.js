const cardsContainer = document.querySelector('.product_cards_container')
getAllProducts()

async function getSomeProducts() {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_all_products.php'
  )
  const data = response.data.data
  let count = 0
  for (const i of data) {
    cardsContainer.appendChild(
      createCard(i.title, i.description, i.price, 'dummy_product_pic.jpg', i.id)
    )
    count++
    if (count == 8) return data
  }
  return data
}

async function getAllProducts() {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_all_products.php'
  )
  const data = response.data.data
  for (const i of data) {
    cardsContainer.appendChild(
      createCard(i.title, i.description, i.price, i.image, i.id)
    )
  }
  return data
}
