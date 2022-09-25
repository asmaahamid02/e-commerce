const currentId = sessionStorage.getItem('currentProduct')
const cardContainer = document.querySelector('.product_cards_container')
getProductInfo(currentId)

async function getProductInfo(id) {
  const response = await axios.get(
    'http://localhost/e-commerce/ecommerce-server/api/get_product_byid.php?id=' +
      id
  )
  const data = response.data.data[0]
  cardContainer.appendChild(
    createCard(data.title, data.description, data.price, data.image, data.id)
  )
}
